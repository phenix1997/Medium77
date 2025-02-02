import React, { useState } from 'react';
import { BookOpen, Search, Bell, ChevronDown } from 'lucide-react';
import { Footer } from './Footer';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center flex-1">
              {/* Logo */}
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">LIBRISCONNECTI</span>
                <span className="text-xs align-top ml-0.5">TM</span>
              </div>

              {/* Search Bar */}
              <div className="ml-8 flex-1 max-w-2xl">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className={`h-5 w-5 ${isSearchFocused ? 'text-gray-900' : 'text-gray-400'}`} />
                  </div>
                  <input
                    type="search"
                    placeholder="Search books, articles, and more..."
                    className="block w-full rounded-full border-0 py-2 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  {searchQuery && isSearchFocused && (
                    <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <SearchResults query={searchQuery} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
              <div className="relative">
                <button className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User avatar"
                    className="h-8 w-8 rounded-full"
                  />
                  <div className="hidden md:flex items-center">
                    <span className="text-sm font-medium text-gray-700">John Doe</span>
                    <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function SearchResults({ query }: { query: string }) {
  // Mock search results
  const results = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    },
    {
      id: '2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    },
  ].filter(book => 
    book.title.toLowerCase().includes(query.toLowerCase()) ||
    book.author.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length === 0) {
    return (
      <div className="px-4 py-2 text-sm text-gray-500">
        No results found for "{query}"
      </div>
    );
  }

  return (
    <div>
      {results.map((book) => (
        <div
          key={book.id}
          className="px-4 py-2 hover:bg-gray-50 flex items-center cursor-pointer"
        >
          <img
            src={book.cover}
            alt={book.title}
            className="h-12 w-9 object-cover rounded"
          />
          <div className="ml-3">
            <div className="text-sm font-medium text-gray-900">{book.title}</div>
            <div className="text-sm text-gray-500">{book.author}</div>
          </div>
        </div>
      ))}
    </div>
  );
}