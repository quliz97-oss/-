export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">서비스</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">홈</a></li>
              <li><a href="#" className="hover:text-black">안전점수 순위</a></li>
              <li><a href="#" className="hover:text-black">취약유형 분석</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">정책/기준</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">점수 산정 기준</a></li>
              <li><a href="#" className="hover:text-black">데이터 수집 정책</a></li>
              <li><a href="#" className="hover:text-black">이의제기 절차</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">데이터</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">데이터 업로드</a></li>
              <li><a href="#" className="hover:text-black">API 가이드</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">문의</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">교통안전 담당부서</a></li>
              <li><a href="#" className="hover:text-black">자주 묻는 질문</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-gray-400">
            &copy; 2026 RentCar Safety Insight. For traffic safety analytics.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[13px] text-gray-400 hover:text-black">Privacy Policy</a>
            <a href="#" className="text-[13px] text-gray-400 hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
