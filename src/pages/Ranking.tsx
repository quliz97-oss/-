import { useState, useMemo } from 'react';
import { Search, ChevronDown, Download, Info, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import Modal from '../components/Modal';

interface Company {
  id: number;
  rank: number;
  name: string;
  score: number;
  grade: string;
  accidentRate: number;
  severity: number;
  pedestrian: number;
  night: number;
  elderly: number;
  region: string;
}

const MOCK_DATA: Company[] = [
  { id: 1, rank: 1, name: '(주)안전렌트카', score: 94.5, grade: '양호', accidentRate: 1.2, severity: 0.8, pedestrian: 0.5, night: 1.1, elderly: 0.4, region: '광주' },
  { id: 2, rank: 2, name: '베스트드라이브', score: 91.2, grade: '양호', accidentRate: 1.5, severity: 1.1, pedestrian: 0.8, night: 1.4, elderly: 0.7, region: '전남' },
  { id: 3, rank: 3, name: '클린모빌리티', score: 88.7, grade: '양호', accidentRate: 1.8, severity: 1.3, pedestrian: 1.1, night: 1.7, elderly: 0.9, region: '기타' },
  { id: 4, rank: 4, name: '에코카쉐어링', score: 82.4, grade: '보통', accidentRate: 2.1, severity: 1.6, pedestrian: 1.4, night: 2.1, elderly: 1.2, region: '광주' },
  { id: 5, rank: 5, name: '스마트렌트', score: 79.1, grade: '보통', accidentRate: 2.4, severity: 1.9, pedestrian: 1.7, night: 2.5, elderly: 1.5, region: '전남' },
  { id: 6, rank: 6, name: '굿모닝카', score: 75.8, grade: '보통', accidentRate: 2.7, severity: 2.2, pedestrian: 2.0, night: 2.8, elderly: 1.8, region: '기타' },
  { id: 7, rank: 7, name: '세이프웨이', score: 68.5, grade: '위험', accidentRate: 3.2, severity: 2.7, pedestrian: 2.5, night: 3.3, elderly: 2.3, region: '광주' },
  { id: 8, rank: 8, name: '투게더렌트', score: 62.4, grade: '위험', accidentRate: 3.6, severity: 3.1, pedestrian: 2.9, night: 3.7, elderly: 2.7, region: '전남' },
  { id: 9, rank: 9, name: '우리들자동차', score: 58.2, grade: '위험', accidentRate: 4.1, severity: 3.6, pedestrian: 3.4, night: 4.2, elderly: 3.2, region: '기타' },
  { id: 10, rank: 10, name: '대성렌트카', score: 45.7, grade: '매우 위험', accidentRate: 5.2, severity: 4.7, pedestrian: 4.5, night: 5.3, elderly: 4.3, region: '광주' },
  { id: 11, rank: 11, name: '한성모터스', score: 41.2, grade: '매우 위험', accidentRate: 5.8, severity: 5.3, pedestrian: 5.1, night: 5.9, elderly: 4.9, region: '전남' },
  { id: 12, rank: 12, name: '중앙렌탈', score: 38.5, grade: '매우 위험', accidentRate: 6.3, severity: 5.8, pedestrian: 5.6, night: 6.4, elderly: 5.4, region: '기타' },
];

export default function Ranking() {
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('전체');
  const [gradeFilter, setGradeFilter] = useState('전체');
  const [sortKey, setSortKey] = useState('score_desc');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const filteredData = useMemo(() => {
    let data = [...MOCK_DATA];

    // Search
    if (searchTerm) {
      data = data.filter(c => c.name.includes(searchTerm));
    }

    // Region
    if (regionFilter !== '전체') {
      data = data.filter(c => c.region === regionFilter);
    }

    // Grade
    if (gradeFilter !== '전체') {
      data = data.filter(c => c.grade === gradeFilter);
    }

    // Sort
    data.sort((a, b) => {
      switch (sortKey) {
        case 'score_desc': return b.score - a.score;
        case 'score_asc': return a.score - b.score;
        case 'pedestrian_desc': return b.pedestrian - a.pedestrian;
        case 'night_desc': return b.night - a.night;
        case 'elderly_desc': return b.elderly - a.elderly;
        default: return 0;
      }
    });

    return data;
  }, [searchTerm, regionFilter, gradeFilter, sortKey]);

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case '양호': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case '보통': return 'bg-blue-50 text-blue-700 border-blue-100';
      case '위험': return 'bg-orange-50 text-orange-700 border-orange-100';
      case '매우 위험': return 'bg-red-50 text-red-700 border-red-100';
      default: return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] font-bold text-[#1E40FF] uppercase tracking-widest mb-4 block">ranking</span>
            <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">렌트카 안전점수 순위</h1>
            <p className="text-gray-500 max-w-2xl leading-relaxed">
              업체별 최종 점수(100점)와 구성 비율(사고비율·심각도·취약유형)을 함께 공개합니다. 
              데이터 기반의 투명한 평가를 통해 안전한 렌트카 이용 환경을 조성합니다.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              데이터 기준일: 2026-02
            </span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-8 bg-white border border-gray-100 rounded-2xl">
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">전체 업체 수</h4>
            <p className="text-3xl font-bold text-black">128</p>
          </div>
          <div className="p-8 bg-white border border-gray-100 rounded-2xl">
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">평균 점수</h4>
            <p className="text-3xl font-bold text-black">62.4</p>
          </div>
          <div className="p-8 bg-white border border-gray-100 rounded-2xl">
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">위험 등급 업체 수</h4>
            <p className="text-3xl font-bold text-black">24</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 p-6 bg-gray-50/50 border border-gray-100 rounded-2xl">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="업체명 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40FF]/20 focus:border-[#1E40FF] transition-all"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative">
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="w-full appearance-none pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40FF]/20 transition-all"
              >
                <option value="전체">지역: 전체</option>
                <option value="광주">광주</option>
                <option value="전남">전남</option>
                <option value="기타">기타</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
            <div className="relative">
              <select
                value={gradeFilter}
                onChange={(e) => setGradeFilter(e.target.value)}
                className="w-full appearance-none pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40FF]/20 transition-all"
              >
                <option value="전체">등급: 전체</option>
                <option value="양호">양호</option>
                <option value="보통">보통</option>
                <option value="위험">위험</option>
                <option value="매우 위험">매우 위험</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
            <div className="relative col-span-2">
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value)}
                className="w-full appearance-none pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40FF]/20 transition-all"
              >
                <option value="score_desc">정렬: 점수 높은순</option>
                <option value="score_asc">정렬: 점수 낮은순</option>
                <option value="pedestrian_desc">정렬: 보행자비율 높은순</option>
                <option value="night_desc">정렬: 야간비율 높은순</option>
                <option value="elderly_desc">정렬: 고령자비율 높은순</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => alert('CSV 다운로드 기능은 준비 중입니다.')}
              className="px-4 py-3 border border-gray-200 bg-white text-black font-semibold rounded-xl hover:bg-gray-50 transition-all flex items-center gap-2 text-sm whitespace-nowrap"
            >
              <Download size={16} /> CSV 다운로드
            </button>
            <button 
              className="px-4 py-3 bg-[#1E40FF] text-white font-semibold rounded-xl hover:bg-[#1635D6] transition-all text-sm whitespace-nowrap"
            >
              산정 기준 보기
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">순위</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">업체명</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">점수</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">등급</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">사고비율</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">심각도</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">보행자</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">야간</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">고령자</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">상세</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredData.map((company) => (
                  <tr key={company.id} className="hover:bg-gray-50/30 transition-colors group">
                    <td className="px-6 py-6 text-sm font-bold text-gray-400">{company.rank}</td>
                    <td className="px-6 py-6 text-sm font-bold text-black">{company.name}</td>
                    <td className="px-6 py-6 text-xl font-bold text-[#1E40FF]">{company.score}</td>
                    <td className="px-6 py-6">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${getGradeColor(company.grade)}`}>
                        {company.grade}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-sm text-gray-500">{company.accidentRate}%</td>
                    <td className="px-6 py-6 text-sm text-gray-500">{company.severity}%</td>
                    <td className="px-6 py-6 text-sm text-gray-500">{company.pedestrian}%</td>
                    <td className="px-6 py-6 text-sm text-gray-500">{company.night}%</td>
                    <td className="px-6 py-6 text-sm text-gray-500">{company.elderly}%</td>
                    <td className="px-6 py-6">
                      <button 
                        onClick={() => setSelectedCompany(company)}
                        className="p-2 text-gray-300 hover:text-[#1E40FF] transition-colors"
                      >
                        <ExternalLink size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredData.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-400 text-sm">검색 결과가 없습니다.</p>
            </div>
          )}
        </div>

        {/* Transparency Notice */}
        <div className="p-8 bg-gray-50 border border-gray-100 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Info className="text-[#1E40FF]" size={20} />
            <h3 className="text-lg font-bold text-black">안내</h3>
          </div>
          <ul className="space-y-3 text-sm text-gray-500 list-disc pl-5">
            <li>점수는 공개된 기준에 따라 산정됩니다. (사고비율 40%, 심각도 30%, 취약유형 30%)</li>
            <li>데이터 품질 및 제출 범위에 따라 변동될 수 있습니다.</li>
            <li>이의 제기는 데이터 업로드 메뉴를 통해 접수합니다.</li>
            <li>본 데이터는 렌트카 이용자의 안전한 선택을 돕기 위한 공익 목적으로 제공됩니다.</li>
          </ul>
        </div>
      </div>

      {/* Detail Modal */}
      <Modal
        isOpen={!!selectedCompany}
        onClose={() => setSelectedCompany(null)}
        title="업체 상세 정보"
      >
        {selectedCompany && (
          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-black mb-1">{selectedCompany.name}</h2>
                <p className="text-sm text-gray-500">{selectedCompany.region} 지역 기반 업체</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-[#1E40FF] mb-1">{selectedCompany.score}</p>
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${getGradeColor(selectedCompany.grade)}`}>
                  {selectedCompany.grade}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">사고비율</h4>
                <p className="text-lg font-bold text-black">{selectedCompany.accidentRate}%</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">심각도</h4>
                <p className="text-lg font-bold text-black">{selectedCompany.severity}%</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">보행자 사고</h4>
                <p className="text-lg font-bold text-black">{selectedCompany.pedestrian}%</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">야간 사고</h4>
                <p className="text-lg font-bold text-black">{selectedCompany.night}%</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h4 className="text-sm font-bold text-black mb-4">개선 권고 (예시)</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#1E40FF] rounded-full mt-1.5 shrink-0"></div>
                  <span>야간 운행 시 사고 비중이 높습니다. 야간 안전 운전 가이드 배포를 권장합니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#1E40FF] rounded-full mt-1.5 shrink-0"></div>
                  <span>보행자 보호 구역 내 속도 제한 준수 교육이 필요합니다.</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setSelectedCompany(null)}
              className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all"
            >
              확인
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}
