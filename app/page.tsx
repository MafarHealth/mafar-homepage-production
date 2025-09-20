'use client';

import React, { useState } from 'react';
import { Menu, X, Calendar, Users, Heart, Zap, ChevronRight, MapPin, Clock, Star, Phone, Mail, MessageCircle, Award, TrendingUp, Shield, CheckCircle, ArrowRight, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';

export default function MAFARHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    clinicName: '',
    location: '',
    type: 'clinic-owner'
  });

  // REAL Google Sheets Integration via Web3Forms
  const handleJoinNetwork = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Web3Forms API - Connected to mafarhealthtech@gmail.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "5452ae12-b718-4763-8bab-2121075729e4", // Production Web3Forms key
          subject: "New MAFAR Network Join Request",
          from_name: "MAFAR Homepage",
          to: "mafarhealthtech@gmail.com",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          clinic_name: formData.clinicName,
          location: formData.location,
          type: formData.type,
          timestamp: new Date().toISOString(),
        }),
      });
      
      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', phone: '', email: '', clinicName: '', location: '', type: 'clinic-owner' });
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      alert("Ada masalah. Sila cuba lagi atau WhatsApp kami.");
    } finally {
      setLoading(false);
    }
  };

  const clusters = [
    {
      name: "KLINIK SETIA CITY",
      cluster: "SETIA ALAM",
      leader: "DR SUHAIMI",
      image: "/clinic1.jpg"
    },
    {
      name: "POLIKLINIK IDEAL",
      cluster: "KAJANG",
      leader: "DR AZNA SARONI",
      image: "/clinic2.jpg"
    },
    {
      name: "KLINIK DINARA",
      cluster: "KUALA TERENGGANU",
      leader: "DR NURYN",
      image: "/clinic3.jpg"
    }
  ];

  const events = [
    {
      title: "Fiesta Kesihatan",
      venue: "Masjid Setia Alam",
      cluster: "Setia Alam",
      date: "28 August 2025",
      image: "/event1.jpg"
    },
    {
      title: "Karnival Cakna Sihat",
      venue: "Masjid Kampung Laut",
      cluster: "Kuala Terengganu",
      date: "5 Julai 2025",
      image: "/event2.jpg"
    },
    {
      title: "Jom Sihat",
      venue: "Masjid Kajang",
      cluster: "Kajang",
      date: "10 Julai 2025",
      image: "/event3.jpg"
    }
  ];

  const blogPosts = [
    { title: "5 Cara Marketing Klinik Yang Berkesan 2025", category: "Positioning", color: "bg-blue-500" },
    { title: "5 Faktor Kejayaan Bisnes Klinik Pada Tahun 2025", category: "Positioning", color: "bg-green-500" },
    { title: "3 Langkah Pengurusan Kewangan Bisnes Klinik", category: "Profit", color: "bg-yellow-500" },
    { title: "5 Tertib Dapatkan A-Team Untuk Bisnes Klinik", category: "People", color: "bg-purple-500" },
    { title: "5 Sebab Kenapa Doktor Kena Berada di LinkedIn", category: "Positioning", color: "bg-pink-500" },
    { title: "7 Tips Capai Sale 100k Pertama Bisnes Klinik Dalam 90 Hari", category: "Positioning", color: "bg-indigo-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center">
          <CheckCircle className="mr-2" size={20} />
          <div>
            <div className="font-bold">Berjaya dihantar! ✅</div>
            <div className="text-sm">Pasukan kami akan hubungi anda dalam masa 24 jam.</div>
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">MAFAR</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#clusters" className="text-gray-700 hover:text-blue-600">Clusters</a>
              <a href="#mcare" className="text-gray-700 hover:text-blue-600">MCare+</a>
              <a href="#events" className="text-gray-700 hover:text-blue-600">Events</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600">Blog</a>
              <button 
                onClick={() => document.getElementById('join-form')?.scrollIntoView()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Join Network
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700">About</a>
              <a href="#clusters" className="block px-3 py-2 text-gray-700">Clusters</a>
              <a href="#mcare" className="block px-3 py-2 text-gray-700">MCare+</a>
              <a href="#events" className="block px-3 py-2 text-gray-700">Events</a>
              <a href="#blog" className="block px-3 py-2 text-gray-700">Blog</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                BRING GOOD<br />
                DOCTORS<br />
                FORWARD
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Doctor led community base soul & loyalty movement
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('join-form')?.scrollIntoView()}
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition flex items-center justify-center"
                >
                  Join our network <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Become MCare+ Member
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">35+</div>
                  <div className="text-lg">Local Communities</div>
                  <div className="mt-4 text-3xl font-bold">1000+</div>
                  <div className="text-lg">Healthcare Providers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAFAR Maneuver Project */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">MAFAR MANEUVER PROJECT</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">BRICK & MORTAR</h3>
              <p className="text-gray-600">We serve the community with L.E.H & ECX</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">COMMUNITY</h3>
              <p className="text-gray-600">We cultivate community collaboration & engagement</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">TECH</h3>
              <p className="text-gray-600">Technology as platform & enabler</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">WHY THIS MATTER?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Serve with SOUL</h3>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Local Loyalty not Faceless Corporation</h3>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Independent Healthcare Players Collaboration Model & Platform</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Clinic Owners Value */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">VALUE FOR CLINIC OWNERS</h3>
              <div className="space-y-4">
                {[
                  "Loyal patient ecosystem",
                  "Unified Referral network",
                  "AI Powered Digital Infra",
                  "Community Powered Growth"
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="text-blue-600 mr-3" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => document.getElementById('join-form')?.scrollIntoView()}
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
              >
                Join our network
              </button>
            </div>

            {/* Local Community Value */}
            <div className="bg-yellow-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">VALUE FOR LOCAL COMMUNITY</h3>
              <div className="space-y-4">
                {[
                  "Discounted Services & Free Vouchers",
                  "Priority Access to Trusted Doctors",
                  "Points & Perks With Every Visit",
                  "Events, Wellness, Family Friendly"
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="text-yellow-600 mr-3" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition w-full">
                Become MCare+ Member
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 35+ Communities */}
      <section id="clusters" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">ALREADY IN 35 LOCAL COMMUNITIES</h2>
          <p className="text-center text-gray-600 mb-12">Serving communities across Malaysia with SOUL</p>
          <div className="grid md:grid-cols-3 gap-8">
            {clusters.map((cluster, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{cluster.name}</h3>
                  <p className="text-gray-600 mb-1">CLUSTER: {cluster.cluster}</p>
                  <p className="text-blue-600 font-semibold">CLUSTER LEADER: {cluster.leader}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="text-blue-600 font-semibold hover:underline">
              View all 35+ clusters →
            </button>
          </div>
        </div>
      </section>

      {/* MCare+ Section */}
      <section id="mcare" className="py-16 bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">MCARE+</h2>
          <div className="text-5xl font-bold mb-6">RM100/year package</div>
          <div className="bg-white/20 backdrop-blur rounded-2xl p-8 mb-8">
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start">
                <CheckCircle className="mr-3 flex-shrink-0 mt-1" size={24} />
                <p>Unlocks access to discounts, free services, events, and loyalty vouchers across the cluster</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-3 flex-shrink-0 mt-1" size={24} />
                <p>Members are eligible for national benefits across all 35+ clusters in Malaysia</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-3 flex-shrink-0 mt-1" size={24} />
                <p>Referrals, events, promotions, and campaigns powered by MCare+ App</p>
              </div>
            </div>
          </div>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Subscribe MCare+
          </button>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">UPCOMING EVENTS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div key={i} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500"></div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2" />
                      <span>Cluster: {event.cluster}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition w-full">
                    RSVP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaders Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">WHAT OUR CLUSTER LEADER SAYS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;MAFAR has transformed our clinic operations and community engagement. The support system is incredible!&rdquo;
                </p>
                <div className="font-semibold">Dr. Leader {i}</div>
                <div className="text-sm text-gray-500">Cluster Leader</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Empower */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">HOW WE EMPOWER OUR DOCTORS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-600" size={40} />
              </div>
              <h3 className="font-bold text-xl mb-2">Continuous People Development</h3>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-yellow-600" size={40} />
              </div>
              <h3 className="font-bold text-xl mb-2">Healthcare Proven Blueprint & Curriculum</h3>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-600" size={40} />
              </div>
              <h3 className="font-bold text-xl mb-2">Supportive Healthcare Community Circle</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">OUR BLOG</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
                <div className={`h-40 ${post.color}`}></div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-gray-500 uppercase">{post.category}</span>
                  <h3 className="font-bold text-lg mt-2 mb-3">{post.title}</h3>
                  <a href="#" className="text-blue-600 font-semibold hover:underline">
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section id="join-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">Join MAFAR Network Today!</h2>
            <p className="text-center mb-8 text-blue-100">Open intake for cluster leader & cluster member</p>
            
            <form onSubmit={handleJoinNetwork} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nama Penuh *"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="px-4 py-3 rounded-lg text-gray-900"
                />
                <input
                  type="tel"
                  placeholder="No. Telefon *"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="px-4 py-3 rounded-lg text-gray-900"
                />
              </div>
              <input
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-lg text-gray-900"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nama Klinik"
                  value={formData.clinicName}
                  onChange={(e) => setFormData({...formData, clinicName: e.target.value})}
                  className="px-4 py-3 rounded-lg text-gray-900"
                />
                <input
                  type="text"
                  placeholder="Lokasi"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="px-4 py-3 rounded-lg text-gray-900"
                />
              </div>
              <select
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full px-4 py-3 rounded-lg text-gray-900"
              >
                <option value="clinic-owner">Clinic Owner</option>
                <option value="cluster-leader">Cluster Leader</option>
                <option value="mcare-member">MCare+ Member</option>
              </select>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 text-gray-900 px-6 py-4 rounded-lg font-bold hover:bg-yellow-300 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MAFAR</h3>
              <p className="text-gray-400">Bring Good Doctors Forward</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Mafar</a></li>
                <li><a href="#" className="hover:text-white">Vision & Mission</a></li>
                <li><a href="#" className="hover:text-white">Media/News</a></li>
                <li><a href="#" className="hover:text-white">Contact Info</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Cluster Directory</a></li>
                <li><a href="#" className="hover:text-white">MCare+ Terms</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <Facebook className="cursor-pointer hover:text-blue-400" />
                <Instagram className="cursor-pointer hover:text-pink-400" />
                <Linkedin className="cursor-pointer hover:text-blue-400" />
                <Youtube className="cursor-pointer hover:text-red-500" />
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex items-center">
                <MessageCircle size={20} className="mr-2" />
                WhatsApp Us
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 MAFAR Health Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
