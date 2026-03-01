import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* SECTION 1: Hero */}
      <section id="home" className="relative pt-32 pb-40 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-bold text-black leading-[1.05] tracking-[-0.03em] mb-8"
              >
                렌트카 안전수준을,<br />모두가 보는 점수로.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg text-gray-500 max-w-lg mb-12 leading-relaxed"
              >
                사고비율·심각도·취약유형(보행자/야간/고령자) 기반으로 업체별 리스크를 산정하고 공개합니다.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => document.getElementById('ranking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-[#1E40FF] text-white font-semibold rounded-lg hover:bg-[#1635D6] transition-all"
                >
                  안전점수 순위 보기
                </button>
                <button 
                  onClick={() => document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border border-gray-200 text-black font-semibold rounded-lg hover:bg-gray-50 transition-all"
                >
                  점수 산정 기준
                </button>
              </motion.div>
            </div>
            <div className="relative hidden lg:block">
              <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1E40FF 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="w-64 h-64 rounded-full border border-gray-200/50 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#1E40FF] rounded-sm animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Feature Grid */}
      <section id="ranking" className="py-32 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-black tracking-tight mb-4">공개형 안전점수 플랫폼</h2>
            <p className="text-gray-500 max-w-md">업체별 안전점수와 세부 비율을 함께 공개하여 투명성을 확보합니다.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            <div className="bg-white p-12">
              <span className="text-[10px] font-bold text-[#1E40FF] uppercase tracking-widest mb-6 block">ranking</span>
              <h3 className="text-2xl font-bold text-black mb-4">안전점수 순위</h3>
              <p className="text-gray-500">점수(100점)·등급·세부 비율 공개</p>
            </div>
            <div className="bg-white p-12">
              <span className="text-[10px] font-bold text-[#1E40FF] uppercase tracking-widest mb-6 block">vulnerable</span>
              <h3 className="text-2xl font-bold text-black mb-4">취약유형 분석</h3>
              <p className="text-gray-500">보행자/야간/고령자 비율 기반 진단</p>
            </div>
            <div className="bg-white p-12">
              <span className="text-[10px] font-bold text-[#1E40FF] uppercase tracking-widest mb-6 block">method</span>
              <h3 className="text-2xl font-bold text-black mb-4">점수 산정 기준</h3>
              <p className="text-gray-500">가중치와 산식 공개로 신뢰 확보</p>
            </div>
            <div className="bg-white p-12">
              <span className="text-[10px] font-bold text-[#1E40FF] uppercase tracking-widest mb-6 block">upload</span>
              <h3 className="text-2xl font-bold text-black mb-4">데이터 업로드</h3>
              <p className="text-gray-500">표준 CSV 양식으로 제출·검증</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Product Sections */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-40">
          {/* Product A */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] font-bold text-[#1E40FF] uppercase tracking-widest mb-6 block">platform feature</span>
              <h2 className="text-5xl font-bold text-black tracking-tight mb-8">안전점수 순위</h2>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                전국 렌트카 업체의 안전 관리 수준을 정량화하여 순위를 매깁니다. 단순 사고 건수가 아닌 운행 거리 대비 사고 비율과 심각도를 반영합니다.
              </p>
              <button className="flex items-center gap-2 text-black font-bold hover:text-[#1E40FF] transition-colors group">
                순위 데이터 보기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="aspect-[4/3] bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center">
              <div className="w-4/5 space-y-4 opacity-20">
                <div className="h-8 bg-gray-200 rounded w-full"></div>
                <div className="h-8 bg-gray-200 rounded w-full"></div>
                <div className="h-8 bg-gray-200 rounded w-full"></div>
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Product B */}
          <div id="vulnerable" className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 aspect-[4/3] bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center">
              <div className="w-3/4 h-1/2 flex gap-4 opacity-20">
                <div className="flex-1 bg-gray-200 rounded-t-lg mt-auto h-full"></div>
                <div className="flex-1 bg-gray-200 rounded-t-lg mt-auto h-2/3"></div>
                <div className="flex-1 bg-gray-200 rounded-t-lg mt-auto h-4/5"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[10px] font-bold text-[#1E40FF] uppercase tracking-widest mb-6 block">analytics</span>
              <h2 className="text-5xl font-bold text-black tracking-tight mb-8">취약유형 분석</h2>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                업체별로 특히 취약한 사고 유형을 진단합니다. 보행자 사고 비중이 높은지, 야간 운행 시 사고가 잦은지 분석하여 맞춤형 개선안을 제시합니다.
              </p>
              <button className="flex items-center gap-2 text-black font-bold hover:text-[#1E40FF] transition-colors group">
                분석 도구 사용하기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Product C */}
          <div id="method" className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] font-bold text-[#1E40FF] uppercase tracking-widest mb-6 block">methodology</span>
              <h2 className="text-5xl font-bold text-black tracking-tight mb-8">점수 산정 기준</h2>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                모든 점수는 투명한 산식에 의해 계산됩니다. 가중치 설정 근거와 통계적 유의성을 함께 공개하여 결과의 신뢰도를 보장합니다.
              </p>
              <button className="flex items-center gap-2 text-black font-bold hover:text-[#1E40FF] transition-colors group">
                산정 방식 확인하기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="aspect-[4/3] bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center">
              <div className="w-2/3 p-8 bg-white border border-gray-100 rounded-xl shadow-sm opacity-30">
                <div className="h-4 bg-gray-100 rounded w-1/2 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Updates / Notice */}
      <section className="py-32 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-12">업데이트 안내</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">데이터 기준일</h4>
              <p className="text-sm text-gray-600">2026년 2월 28일 기준 사고 통계 반영</p>
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">반영 주기</h4>
              <p className="text-sm text-gray-600">매월 첫째 주 금요일 정기 업데이트</p>
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">문의/이의제기</h4>
              <p className="text-sm text-gray-600">교통안전공단 담당부서 (02-1234-5678)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Bottom CTA */}
      <section id="upload" className="py-40 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-12">
            데이터를 제출하고, 안전관리를 시작하세요.
          </h2>
          <button className="px-10 py-5 bg-[#1E40FF] text-white font-bold rounded-xl hover:bg-[#1635D6] transition-all shadow-xl shadow-blue-100">
            데이터 업로드
          </button>
        </div>
      </section>
    </div>
  );
}
