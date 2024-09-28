import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { ReactComponent as PrevIcon } from '../../assets/prev.svg';
import { ReactComponent as NextIcon } from '../../assets/next.svg';

interface PaginatedListProps {
  items: any[]; 
  renderItem: (item: any, index: number, expandedIndex: number | null, handleReadMore: (index: number) => void) => ReactNode; 
  itemsPerPageOptions?: { [key: number]: number; default: number };
}

const PaginatedList: React.FC<PaginatedListProps> = ({ items, renderItem, itemsPerPageOptions = { 940: 1, 1420: 2, default: 3 } }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions.default);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);


  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleReadMore = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const matchingOption = Object.keys(itemsPerPageOptions)
        .map(Number)
        .find((key) => screenWidth < key);
      setItemsPerPage(itemsPerPageOptions[matchingOption || 'default']);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerPageOptions]);

  return (
    <div className="cards-list-container">
      <div className="cards-list-contain">
        {currentItems.map((item, index) => renderItem(item, index, expandedIndex, handleReadMore))}
      </div>

      <div className="pagination">
        <span className="total-pages">
          <span className="current-page">{String(currentPage).padStart(2, '0')}</span> {`of ${String(totalPages).padStart(2, '0')}`}
        </span>
        <div className="pagination-btn-container">
          <button className="prev" onClick={handlePrev} disabled={currentPage === 1}>
            <PrevIcon />
          </button>
          <button className="next" onClick={handleNext} disabled={currentPage === totalPages}>
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginatedList;
