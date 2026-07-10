import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';

interface TooltipProps {
  children: React.ReactNode;
  content?: React.ReactNode;
  text?: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  disabled?: boolean;
  key?: React.Key;
}

export const Tooltip = ({ children, content, text, side = 'top', className, disabled = false }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ top: number, left: number, width: number, height: number } | null>(null);
  const displayContent = content || text;

  const updateCoords = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
      });
    }
  };

  useEffect(() => {
    if (isVisible) {
      updateCoords();
      window.addEventListener('scroll', updateCoords);
      window.addEventListener('resize', updateCoords);
    }
    return () => {
      window.removeEventListener('scroll', updateCoords);
      window.removeEventListener('resize', updateCoords);
    };
  }, [isVisible]);

  const getPositionStyles = () => {
    const space = 12;
    if (!coords) return {};
    
    const { top, left, width, height } = coords as any;

    switch (side) {
      case 'top':
        return {
          top: top - space,
          left: left + width / 2,
          transform: 'translate(-50%, -100%)',
        };
      case 'bottom':
        return {
          top: top + height + space,
          left: left + width / 2,
          transform: 'translate(-50%, 0)',
        };
      case 'left':
        return {
          top: top + height / 2,
          left: left - space,
          transform: 'translate(-100%, -50%)',
        };
      case 'right':
        return {
          top: top + height / 2,
          left: left + width + space,
          transform: 'translate(0, -50%)',
        };
      default:
        return {};
    }
  };

  const getArrowStyles = () => {
    switch (side) {
      case 'top': return 'top-full left-1/2 -translate-x-1/2 -mt-1 border-t-gray-900/95';
      case 'bottom': return 'bottom-full left-1/2 -translate-x-1/2 -mb-1 border-b-gray-900/95';
      case 'left': return 'left-full top-1/2 -translate-y-1/2 -ml-1 border-l-gray-900/95';
      case 'right': return 'right-full top-1/2 -translate-y-1/2 -mr-1 border-r-gray-900/95';
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative flex items-center justify-center shrink-0 ${className || ''}`}
      onMouseEnter={() => !disabled && setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && !disabled && displayContent && createPortal(
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            style={{
              position: 'absolute',
              zIndex: 9999,
              ...getPositionStyles(),
            }}
            className="px-3 py-1.5 bg-gray-900/95 text-white text-[10px] font-bold rounded-lg shadow-xl pointer-events-none border border-white/10 backdrop-blur-md text-center w-max max-w-[200px] whitespace-normal leading-tight"
            dir="rtl"
          >
            {displayContent}
            <div className={`absolute border-[4px] border-transparent ${getArrowStyles()}`} />
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </div>
  );
};

export const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const TooltipTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const TooltipContent = ({ children }: { children: React.ReactNode, side?: string }) => <>{children}</>;
