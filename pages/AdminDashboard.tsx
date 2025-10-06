import React, { useState } from 'react';
import type { User } from '../types';

interface AdminDashboardProps {
    user: User;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [videoFile, setVideoFile] = useState<File | null>(null);

    const handleUpload = (e: React.FormEvent) => {
        e.preventDefault();
        if (!videoFile) {
            alert("Please select a video file to upload.");
            return;
        }
        
        // In a real application, you would send this data to a server.
        console.log({
            title,
            description,
            category,
            price: price === 'Free' ? 'Free' : parseFloat(price),
            fileName: videoFile.name,
            fileSize: videoFile.size,
            fileType: videoFile.type,
        });

        alert(`'${title}' uploaded successfully! Check the console for details.`);
        // Reset form
        setTitle('');
        setDescription('');
        setCategory('');
        setPrice('');
        setVideoFile(null);
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-lg text-slate-400 mb-10">Welcome back, {user.username}. Let's create something new.</p>

            <div className="bg-base-200 p-8 rounded-xl shadow-2xl border border-base-300">
                <h2 className="text-2xl font-bold text-white mb-6">Upload New Video Course</h2>
                <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label htmlFor="title" className="block text-sm font-medium text-slate-400 mb-2">Course Title</label>
                        <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} required className="w-full bg-base-300 border-base-300 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium text-slate-400 mb-2">Description</label>
                        <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} required rows={4} className="w-full bg-base-300 border-base-300 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"></textarea>
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-slate-400 mb-2">Category</label>
                        <input type="text" id="category" value={category} onChange={e => setCategory(e.target.value)} required placeholder="e.g., Design, Code" className="w-full bg-base-300 border-base-300 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-slate-400 mb-2">Price ($)</label>
                        <input type="text" id="price" value={price} onChange={e => setPrice(e.target.value)} required placeholder="e.g., 99.99 or Free" className="w-full bg-base-300 border-base-300 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="video" className="block text-sm font-medium text-slate-400 mb-2">Video File</label>
                        <input type="file" id="video" accept="video/*" onChange={e => setVideoFile(e.target.files ? e.target.files[0] : null)} required className="w-full text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-primary/10 file:text-brand-primary hover:file:bg-brand-primary/20" />
                    </div>
                    <div className="md:col-span-2 text-right">
                        <button type="submit" className="bg-brand-primary hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                            Upload Course
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminDashboard;
