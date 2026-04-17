"use client";

import React, { useState, useRef, useEffect } from "react";
import {
    Plus,
    Search,
    Pencil,
    Trash2,
    X,
    Save,
    Truck,
    CheckCircle2,
    Clock,
    Image as ImageIcon,
    Link as LinkIcon,
    UploadCloud,
    FileImage,
    Loader2,
    AlertCircle
} from "lucide-react";
import { CartBuild, CartBuildStatus } from "@/lib/types";

export default function CartBuildsPage() {
    const [builds, setBuilds] = useState<CartBuild[]>([]);
    const [view, setView] = useState<"list" | "form">("list");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    // File Input Ref
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Form State
    const [formData, setFormData] = useState<Partial<CartBuild>>({
        clientName: "",
        model: "",
        status: "blueprint",
        price: "",
        images: [],
        description: ""
    });

    const [imageUrlInput, setImageUrlInput] = useState("");

    // Fetch builds on mount
    useEffect(() => {
        fetchBuilds();
    }, []);

    // Fetch builds from API
    async function fetchBuilds(query?: string) {
        setIsLoading(true);
        setError(null);
        try {
            const url = query ? `/api/cart-builds?q=${encodeURIComponent(query)}` : '/api/cart-builds';
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch builds');
            }

            setBuilds(data.data || []);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch builds');
        } finally {
            setIsLoading(false);
        }
    }

    // Search handler with debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchBuilds(searchQuery || undefined);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    // Delete handler
    const handleDelete = async (id: string) => {
        if (!confirm("Decommission this build configuration?")) return;

        try {
            const response = await fetch(`/api/cart-builds/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to delete build');
            }

            setBuilds(builds.filter((b) => b.id !== id));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to delete build');
        }
    };

    const handleEdit = (build: CartBuild) => {
        setFormData(build);
        setEditingId(build.id);
        setView("form");
        setError(null);
    };

    const handleCreate = () => {
        setFormData({ clientName: "", model: "", status: "blueprint", price: "", images: [], description: "" });
        setEditingId(null);
        setView("form");
        setError(null);
    };

    // Handle Local File Upload (Convert to Base64)
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const filePromises = Array.from(files).map(file => {
                return new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result as string);
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            });

            Promise.all(filePromises)
                .then(base64Images => {
                    setFormData(prev => ({
                        ...prev,
                        images: [...(prev.images || []), ...base64Images]
                    }));
                })
                .catch(err => {
                    console.error("Error reading files:", err);
                    setError("Failed to process images. Please try again.");
                });
        }
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    // Handle URL String Input
    const addUrlImage = () => {
        if (!imageUrlInput.trim()) return;
        setFormData(prev => ({
            ...prev,
            images: [...(prev.images || []), imageUrlInput]
        }));
        setImageUrlInput("");
    };

    const removeImage = (indexToRemove: number) => {
        setFormData(prev => ({
            ...prev,
            images: prev.images?.filter((_, index) => index !== indexToRemove)
        }));
    };

    // Save handler (create or update)
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setError(null);

        try {
            const url = editingId ? `/api/cart-builds/${editingId}` : '/api/cart-builds';
            const method = editingId ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    clientName: formData.clientName,
                    model: formData.model,
                    status: formData.status,
                    price: formData.price,
                    images: formData.images,
                    description: formData.description,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to save build');
            }

            if (editingId) {
                setBuilds(builds.map(b => b.id === editingId ? data.data : b));
            } else {
                setBuilds([data.data, ...builds]);
            }

            setView("list");
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to save build');
        } finally {
            setIsSaving(false);
        }
    };

    // Format relative time
    const formatRelativeTime = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hrs ago`;
        if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
        return date.toLocaleDateString();
    };

    return (
        <div className="min-h-screen bg-[#11151d] text-neutral-200 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-[#11151d] to-[#11151d] p-8">

            <div className="max-w-7xl mx-auto mt-20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-light text-white tracking-tight">
                            Fleet <span className="text-amber-500 font-semibold">Configuration</span>
                        </h1>
                        <p className="text-neutral-500 mt-1">Manage custom commissions and production specifications.</p>
                    </div>

                    {view === "list" && (
                        <button
                            onClick={handleCreate}
                            className="group flex items-center gap-2 px-5 py-2.5 bg-neutral-100 hover:bg-white text-black rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                        >
                            <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
                            <span>Commission New Build</span>
                        </button>
                    )}
                </div>

                {/* Error Alert */}
                {error && (
                    <div className="mb-6 flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{error}</span>
                        <button onClick={() => setError(null)} className="ml-auto hover:text-red-300">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* CONTENT AREA */}
                <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-50"></div>

                    {view === "list" ? (
                        /* --- LIST VIEW --- */
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-6 bg-neutral-900/80 p-2 rounded-xl border border-neutral-800/50">
                                <Search className="w-5 h-5 text-neutral-500 ml-2" />
                                <input
                                    type="text"
                                    placeholder="Search chassis, client, or VIN..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-transparent border-none focus:ring-0 focus:outline-none text-white placeholder-neutral-600 w-full text-sm"
                                />
                            </div>

                            {isLoading ? (
                                <div className="py-20 flex flex-col items-center justify-center text-neutral-500">
                                    <Loader2 className="w-8 h-8 animate-spin mb-4" />
                                    <span>Loading fleet configurations...</span>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                        <tr className="border-b border-neutral-800 text-xs uppercase tracking-widest text-neutral-500">
                                            <th className="pb-4 pl-4 font-medium w-20">Visual</th>
                                            <th className="pb-4 font-medium">Build Specification</th>
                                            <th className="pb-4 font-medium">Client</th>
                                            <th className="pb-4 font-medium">Status</th>
                                            <th className="pb-4 font-medium">Value</th>
                                            <th className="pb-4 pr-4 text-right font-medium">Controls</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                        {builds.length > 0 ? (
                                            builds.map((build) => (
                                                <tr key={build.id} className="group hover:bg-neutral-800/30 transition-colors border-b border-neutral-800/50 last:border-0">
                                                    <td className="py-5 pl-4 align-middle">
                                                        <div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 overflow-hidden flex items-center justify-center relative">
                                                            {build.images && build.images.length > 0 ? (
                                                                <img src={build.images[0]} alt="thumbnail" className="w-full h-full object-cover" />
                                                            ) : (
                                                                <ImageIcon className="w-4 h-4 text-neutral-600" />
                                                            )}
                                                            {build.images && build.images.length > 1 && (
                                                                <div className="absolute bottom-0 right-0 bg-amber-500 text-black text-[9px] font-bold px-1 rounded-tl-sm">
                                                                    +{build.images.length - 1}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="py-5 align-middle">
                                                        <div className="font-medium text-white group-hover:text-amber-400 transition-colors">{build.model}</div>
                                                        <div className="text-xs text-neutral-600 font-mono mt-1">ID: {build.id.toUpperCase().slice(0, 8)}</div>
                                                    </td>
                                                    <td className="py-5 text-neutral-300 align-middle">{build.clientName}</td>
                                                    <td className="py-5 align-middle">
                                                        <StatusBadge status={build.status} />
                                                    </td>
                                                    <td className="py-5 pr-4 text-right align-middle">
                                                        <div className="flex justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                            <button onClick={() => handleEdit(build)} className="p-2 hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-colors">
                                                                <Pencil className="w-4 h-4" />
                                                            </button>
                                                            <button onClick={() => handleDelete(build.id)} className="p-2 hover:bg-red-900/20 rounded-lg text-neutral-400 hover:text-red-400 transition-colors">
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={6} className="py-12 text-center text-neutral-500">
                                                    No active commissions found.
                                                </td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* --- CREATE / EDIT FORM VIEW --- */
                        <div className="p-8 max-w-4xl mx-auto">
                            <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-800">
                                <h2 className="text-xl font-light text-white">
                                    {editingId ? "Modify Specification" : "New Commission"}
                                </h2>
                                <button onClick={() => setView("list")} className="p-2 hover:bg-neutral-800 rounded-full text-neutral-500 hover:text-white transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Left Column: Details */}
                                <div className="lg:col-span-2 space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Client Name</label>
                                            <input
                                                required
                                                value={formData.clientName}
                                                onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-neutral-600"
                                                placeholder="e.g. Urban Tacos LLC"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Chassis Model</label>
                                            <input
                                                required
                                                value={formData.model}
                                                onChange={(e) => setFormData({...formData, model: e.target.value})}
                                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-neutral-600"
                                                placeholder="e.g. Mark IV Stainless"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Contract Value</label>
                                            <input
                                                required
                                                value={formData.price}
                                                onChange={(e) => setFormData({...formData, price: e.target.value})}
                                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-neutral-600 font-mono"
                                                placeholder="$0.00"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Production Stage</label>
                                            <select
                                                value={formData.status}
                                                onChange={(e) => setFormData({...formData, status: e.target.value as CartBuildStatus})}
                                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                                            >
                                                <option value="blueprint">Blueprint Phase</option>
                                                <option value="production">In Production</option>
                                                <option value="delivered">Delivered</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Description (Optional)</label>
                                        <textarea
                                            value={formData.description || ""}
                                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                                            rows={3}
                                            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-neutral-600 resize-none"
                                            placeholder="Additional notes about this build..."
                                        />
                                    </div>
                                </div>

                                {/* Right Column: Images */}
                                <div className="space-y-4">
                                    <label className="text-xs uppercase tracking-wider text-neutral-500 font-medium flex items-center gap-2">
                                        <ImageIcon className="w-3 h-3" />
                                        Vehicle Imagery
                                    </label>

                                    <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-700">

                                        {/* 1. Upload Zone */}
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            className="group cursor-pointer border-2 border-dashed border-neutral-700 hover:border-amber-500/50 hover:bg-neutral-800/50 rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 mb-4"
                                        >
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                className="hidden"
                                                ref={fileInputRef}
                                                onChange={handleFileUpload}
                                            />
                                            <div className="p-3 bg-neutral-800 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:text-amber-500">
                                                <UploadCloud className="w-5 h-5 text-neutral-400 group-hover:text-amber-500" />
                                            </div>
                                            <span className="text-xs font-medium text-neutral-300 group-hover:text-white">Click to Upload</span>
                                            <span className="text-[10px] text-neutral-500 mt-1">Supports JPG, PNG, WEBP</span>
                                        </div>

                                        {/* 2. URL Input (Fallback) */}
                                        <div className="flex gap-2 mb-4">
                                            <div className="relative flex-grow">
                                                <LinkIcon className="absolute left-3 top-2.5 w-4 h-4 text-neutral-600" />
                                                <input
                                                    type="text"
                                                    value={imageUrlInput}
                                                    onChange={(e) => setImageUrlInput(e.target.value)}
                                                    placeholder="Or paste image URL"
                                                    className="w-full bg-neutral-800 border-none rounded-lg pl-9 pr-3 py-2 text-xs text-white focus:ring-1 focus:ring-amber-500 placeholder-neutral-600"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={addUrlImage}
                                                className="bg-neutral-800 hover:bg-neutral-700 text-white px-3 rounded-lg transition-colors border border-neutral-700"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* 3. Image List */}
                                        <div className="space-y-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                                            {formData.images?.map((url, idx) => (
                                                <div key={idx} className="group relative flex gap-3 items-center bg-neutral-900/50 p-2 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
                                                    <div className="h-10 w-16 rounded overflow-hidden bg-neutral-950 flex-shrink-0">
                                                        <img src={url} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="flex-grow min-w-0">
                                                        <p className="text-[10px] text-neutral-400 truncate font-mono">
                                                            {url.startsWith('data:') ? 'Base64 Image' : url}
                                                        </p>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeImage(idx)}
                                                        className="p-1.5 text-neutral-500 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-all"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ))}
                                            {(!formData.images || formData.images.length === 0) && (
                                                <div className="py-4 flex flex-col items-center justify-center text-neutral-600 text-xs text-center border-t border-neutral-800 mt-2">
                                                    <FileImage className="w-4 h-4 mb-1 opacity-40" />
                                                    <span>No media attached</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Actions */}
                                <div className="lg:col-span-3 pt-6 flex gap-4 border-t border-neutral-800">
                                    <button
                                        type="submit"
                                        disabled={isSaving}
                                        className="flex-1 bg-white hover:bg-neutral-200 disabled:bg-neutral-600 text-black font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                    >
                                        {isSaving ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                <span>Saving...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Save className="w-4 h-4" />
                                                <span>Save Configuration</span>
                                            </>
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setView("list")}
                                        disabled={isSaving}
                                        className="flex-1 bg-transparent border border-neutral-700 hover:bg-neutral-800 disabled:opacity-50 text-white font-medium py-3 rounded-lg transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Helper Component for Status Badges
function StatusBadge({ status }: { status: CartBuildStatus }) {
    const styles = {
        blueprint: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        production: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        delivered: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    };

    const icons = {
        blueprint: <Clock className="w-3 h-3" />,
        production: <Truck className="w-3 h-3" />,
        delivered: <CheckCircle2 className="w-3 h-3" />,
    };

    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      {icons[status]}
            <span className="capitalize">{status}</span>
    </span>
    );
}
