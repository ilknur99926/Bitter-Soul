'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { API_BASE_URL } from '@/config/api';

const translations = {
  az: {
    blogTitle: '📝 Bitter Blog',
    blogSubtitle: 'Fincanla başlayan düşüncələr burada bitmir...',
    newPost: '✍️ Yeni Yazı',
    sortByDate: '📅 Tarix',
    sortByLikes: '❤️ Bəyənmə',
    allCategories: '🔎 Bütün Kateqoriyalar',
    placeholderSearch: 'Axtar...',
    placeholderTitle: 'Başlıq',
    placeholderContent: 'Məqalə...',
    selectCategory: 'Kateqoriya seçin',
    cancel: 'Ləğv et',
    share: 'Paylaş',
    noPosts: 'Heç bir yazı tapılmadı.',
    back: '⬅ Geri',
    comment: 'Şərh',
    writeComment: 'Rəy yaz...'
  },
  en: {
    blogTitle: '📝 Bitter Blog',
    blogSubtitle: 'Thoughts that start with a sip don’t end here...',
    newPost: '✍️ New Post',
    sortByDate: '📅 Date',
    sortByLikes: '❤️ Likes',
    allCategories: '🔎 All Categories',
    placeholderSearch: 'Search...',
    placeholderTitle: 'Title',
    placeholderContent: 'Your thoughts...',
    selectCategory: 'Choose a category',
    cancel: 'Cancel',
    share: 'Share',
    noPosts: 'No posts found.',
    back: '⬅ Back',
    comment: 'Comment',
    writeComment: 'Write a comment...'
  }
};

const categoriesAZ = [
  'Kofe fəlsəfəsi',
  'Şüur və zaman',
  'Yaradıcılıq və tənhalıq',
  'Nietzsche və yaşamaq arzusu',
  'Kant və əxlaq',
  'Estetika və duyğular',
  'Gündəlik düşüncələr'
];

const categoriesEN = [
  'Philosophy of Coffee',
  'Consciousness and Time',
  'Creativity and Solitude',
  'Nietzsche and the Will to Live',
  'Kant and Ethics',
  'Aesthetics and Emotion',
  'Daily Reflections'
];

export default function BlogPage() {
  const { language } = useLanguage();
  const { user, loading } = useAuth();
  const router = useRouter();

  const t = translations[language];
  const categories = language === 'az' ? categoriesAZ : categoriesEN;

  const [pageLoading, setPageLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [commentMap, setCommentMap] = useState({});
  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState('date');
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace('/');
      return;
    }
    fetch(`${API_BASE_URL}/api/posts`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Məqalə alınmadı:', err))
      .finally(() => setPageLoading(false));
  }, [user, loading]);
  const filteredPosts = posts
    .filter(p =>
      (!filterCategory || p.category === filterCategory) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.content.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortType === 'date') return new Date(b.date) - new Date(a.date);
      if (sortType === 'likes') return b.likes - a.likes;
      return 0;
    });
  const handleAddPost = async () => {
    if (!title || !content || !category) return;
    const newPost = {
      author: user?.name || 'Anonim',
      title,
      content,
      category,
      date: new Date().toISOString()
    };
    try {
      const res = await fetch(`${API_BASE_URL}/api/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      });
      if (!res.ok) throw new Error('Post əlavə olunmadı');
      const saved = await res.json();
      setPosts([saved, ...posts]);
      setTitle('');
      setContent('');
      setCategory('');
      setShowForm(false);
    } catch (err) {
      console.error('Xəta:', err);
    }
  };
  const handleLike = id => {
    setPosts(prev =>
      prev.map(p => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };
  const handleComment = id => {
    const comment = commentMap[id];
    if (!comment) return;
    setPosts(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, comments: [...p.comments, { author: user?.name || 'Qonaq', content: comment }] }
          : p
      )
    );
    setCommentMap({ ...commentMap, [id]: '' });
  };

if (loading) {
  return (
    <div className="h-screen flex items-center justify-center text-white text-lg font-semibold">
      Yüklənir...
    </div>
  );
}


  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Silinmədi');

      const data = await res.json();
      console.log(data.message);
      setPosts(prev => prev.filter(post => post.id !== id));
    } catch (err) {
      console.error('Xəta:', err);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1a17] to-[#2a221d] pt-24 pb-16 px-4 text-white font-serif">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex justify-start">
          <button
            onClick={() => router.push('/')}
            className="text-sm px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded"
          >
            {t.back}
          </button>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">{t.blogTitle}</h1>
          <p className="text-lg text-amber-200">{t.blogSubtitle}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setShowForm(prev => !prev)}
            className="px-4 py-2 rounded border border-amber-300 bg-stone-800 text-white hover:bg-stone-700 transition"
          >
            {t.newPost}
          </button>

          <button
            onClick={() => setSortType('date')}
            className={`px-4 py-2 rounded border transition ${sortType === 'date'
              ? 'bg-stone-800 text-white border-amber-600'
              : 'bg-stone-800 text-white border-amber-300 hover:bg-stone-700'
              }`}
          >
            {t.sortByDate}
          </button>

          <button
            onClick={() => setSortType('likes')}
            className={`px-4 py-2 rounded border transition ${sortType === 'likes'
              ? 'bg-amber-600 text-black border-amber-600'
              : 'bg-stone-800 text-white border-amber-300 hover:bg-stone-700'
              }`}
          >
            {t.sortByLikes}
          </button>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="rounded px-3 py-2 bg-stone-800 text-white border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value=''>{t.allCategories}</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.placeholderSearch}
            className="rounded px-3 py-2 bg-stone-800 text-white border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

        </div>
        {showForm && (
          <div className="bg-white/90 text-black p-6 rounded-xl space-y-4 shadow-lg">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t.placeholderTitle}
              className="w-full p-2 rounded border border-amber-300 bg-stone-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 rounded border border-amber-300 bg-stone-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">{t.selectCategory}</option>
              {categories.map(cat => <option key={cat}>{cat}</option>)}
            </select>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={t.placeholderContent}
              rows={5}
              className="w-full p-2 rounded border border-amber-300 bg-stone-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <div className="flex justify-end gap-4">
              <button onClick={handleAddPost} className="bg-amber-600 text-white px-4 py-2 rounded">{t.share}</button>
              <button onClick={() => setShowForm(false)} className="bg-gray-400 text-white px-4 py-2 rounded">{t.cancel}</button>
            </div>
          </div>
        )}
        {filteredPosts.length === 0 ? (
          <p className="text-center text-amber-300">{t.noPosts}</p>
        ) : (
          <div className="space-y-8">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-[#2b211c]/90 p-6 rounded-xl shadow-xl">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p className="text-sm text-amber-300">👤 {post.author} — 📅 {new Date(post.date).toLocaleDateString()}</p>
                  </div>
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                </div>
                <p className="whitespace-pre-line text-stone-100 mb-4">{post.content}</p>
                <div className="flex gap-4 text-sm mb-4">
                  <button onClick={() => handleLike(post.id)} className="px-3 py-1 border border-amber-500 text-amber-500 rounded hover:bg-amber-500 hover:text-black transition">❤️ {post.likes}</button>
                  <button onClick={() => setCommentMap(prev => ({ ...prev, [post.id]: prev[post.id] ?? '' }))} className="px-3 py-1 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-black transition">💬 {post.comments.length} {t.comment}</button>
                </div>

                <div className="space-y-2">
                  {post.comments.map((c, i) => (
                    <div key={i} className="bg-[#3a2e28] px-4 py-2 rounded text-sm text-amber-100">
                      <strong>{c.author}:</strong> {c.content}
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex gap-2">
                  <input
                    type="text"
                    value={commentMap[post.id] || ''}
                    onChange={(e) => setCommentMap({ ...commentMap, [post.id]: e.target.value })}
                    placeholder={t.writeComment}
                    className="flex-1 px-3 py-2 rounded bg-stone-800 text-white border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <button
                    onClick={() => handleComment(post.id)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 rounded"
                  >{t.share}</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}