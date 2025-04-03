'use client';

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import GoStart from "../assets/GoStart.png";
import { useCallback } from "react";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToContent = useCallback(() => {
    const contentSection = document.getElementById('content-section');
    contentSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full top-0 bg-gray-900/95 backdrop-blur-sm z-50 px-8 py-4 border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold text-white hover:text-gray-300 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Pebble
          </button>
          <Link
            href="/login"
            className="px-6 py-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            로그인
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20 w-full">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-[0.6] text-white space-y-6"
          >
            <h2 className="text-lg text-gray-400 font-medium">
              From SGF to Insight – with Pebble
            </h2>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              바둑 애호가들을 위한
              <br />
              <span className="text-5xl lg:text-6xl block mt-4">
                AI 복기 서비스
              </span>
            </h1>
            <p className="text-2xl text-gray-400 font-medium mt-4">
              복기를 더 쉽고, 간편하게!
            </p>
            <p className="text-gray-300 text-lg mt-8 max-w-2xl leading-relaxed">
              Pebble은 아마추어 바둑팬부터 유단자까지,
              <br />
              <span className="whitespace-nowrap">누구나 쉽고 효과적으로 복기할 수 있도록 돕는 AI 기반 바둑 복기 플랫폼입니다.</span>
            </p>
            <div className="flex gap-4 mt-8">
              <Link
                href="/login"
                className="px-10 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out text-lg font-medium font-bold"
              >
                시작하기
              </Link>
              <button
                onClick={scrollToContent}
                type="button"
                className="px-8 py-3 rounded-full border-2 border-gray-400 text-white hover:bg-gray-800 hover:scale-105 hover:border-gray-600 transition-all duration-300 ease-in-out text-lg font-medium font-bold"
              >
                더 알아보기
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-[0.7] flex justify-end items-center"
          >
            <div className="relative w-[450px] h-[450px]">
              <Image
                src={GoStart}
                alt="Pebble Platform Illustration"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div id="content-section" className="min-h-screen bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* How It Works Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-8">서비스 소개</h2>
            <div className="bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                사용자는 자신의 기보를 업로드하기만 하면,
              </p>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li>• 바둑 AI 분석을 기반으로 한 맞춤형 해설</li>
                <li>• 이해하기 쉬운 하이라이트 리뷰</li>
                <li>• 직관적인 복기 도구(SGF Editor) 제공을 통해</li>
              </ul>
              <p className="text-gray-300 text-lg mt-6">
                기존보다 훨씬 더 간단하게 복기할 수 있습니다.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">주요 기능</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-4">AI 맞춤 해설 제공</h3>
                <p className="text-gray-300 leading-relaxed">
                  상황에 맞는 해설로 복기 비용 절감
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-white mb-4">기보 아카이빙</h3>
                <p className="text-gray-300 leading-relaxed">
                  내 기보에 의미를 더하고 저장
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <div className="text-4xl mb-4">🧩</div>
                <h3 className="text-xl font-semibold text-white mb-4">사용자 친화적 복기 도구</h3>
                <p className="text-gray-300 leading-relaxed">
                  UX/UI 개선으로 누구나 쉽게
                </p>
              </div>
            </div>
          </motion.div>

          {/* Technology Stack Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-4xl font-bold text-white mb-8">기술 구성</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold text-white mb-4">GTP (Go Text Protocol)</h3>
                <p className="text-gray-300 leading-relaxed">
                  바둑 AI와 GUI 연결
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-xl font-semibold text-white mb-4">SGF 포맷 지원</h3>
                <p className="text-gray-300 leading-relaxed">
                  다양한 프로그램과 호환
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-4">KataGo 통합</h3>
                <p className="text-gray-300 leading-relaxed">
                  강력한 오픈소스 바둑 AI 사용
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <p className="text-2xl text-white">
              나만의 바둑 스토리를 기록하고, 복기를 더 즐겁게. 지금 Pebble을 시작해보세요!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 