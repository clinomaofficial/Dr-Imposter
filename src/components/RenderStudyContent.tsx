import React from 'react';
import { Language } from '../types';

export const RenderStudyContent = ({ content, language }: { content: string, language?: Language }) => {
  if (!content) return null;
  
  const isArabic = language === 'Arabic';
  
  // Sanitize literal <br> tags sometimes returned by LLM in parentheses or elsewhere
  const sanitizedContent = content.replace(/<br\s*\/?>/gi, '\n');

  // Split by lines to handle bullet points and structure
  const lines = sanitizedContent.split('\n');

  const renderTextWithTags = (text: string) => {
    // Regex to split by all emphasis and highlight tag variations
    const parts = text.split(/(<(?:hl|hl1|hl2|hl3|b|i|u)>.*?<\/(?:hl|hl1|hl2|hl3|b|i|u)>)/g);
    
    const elements = parts.map((part, i) => {
      const isCustomTag = part.startsWith('<') && part.includes('</');
      
      if (isCustomTag) {
        const tagMatch = part.match(/^<(hl[123]?|b|i|u)>(.*?)<\/\1>$/);
        if (!tagMatch) return <span key={`tag-${i}`}>{part}</span>;
        
        const tagName = tagMatch[1];
        const innerText = tagMatch[2];
        
        if (tagName === 'b') return <strong key={`tag-${i}`} className="font-extrabold text-app-text-dark">{innerText}</strong>;
        if (tagName === 'i') return <em key={`tag-${i}`} className="italic text-gray-700 opacity-90">{innerText}</em>;
        if (tagName === 'u') return <u key={`tag-${i}`} className="underline decoration-primary/60 underline-offset-4 decoration-2">{innerText}</u>;

        // High-contrast highlighting
        let colorClass = "bg-[#fdf3cc] text-[#15277a] font-bold px-1.5 py-0.5 rounded shadow-sm inline-block";
        if (tagName === 'hl1') colorClass = "bg-rose-700 text-white font-black px-1.5 py-0.5 rounded shadow-md inline-block";
        if (tagName === 'hl2') colorClass = "bg-blue-700 text-white font-black px-1.5 py-0.5 rounded shadow-md inline-block";
        if (tagName === 'hl3') colorClass = "bg-emerald-800 text-white font-black px-1.5 py-0.5 rounded shadow-md inline-block";
        
        return (
          <span key={`tag-${i}`} className={`${colorClass} mx-0.5 transform -rotate-0.5`}>
            {innerText}
          </span>
        );
      }
      
      // Handle inline bold items: **something**
      const boldParts = part.split(/(\*\*.*?\*\*)/g);
      return <span key={`part-${i}`}>
        {boldParts.map((bPart, j) => {
          if (bPart.startsWith('**') && bPart.endsWith('**')) {
             return <strong key={`bold-${j}`} className="font-bold text-gray-900">{bPart.substring(2, bPart.length - 2)}</strong>
          }
          return <span key={`bold-text-${j}`}>{bPart}</span>
        })}
      </span>;
    });
    
    return <>{elements}</>;
  };

  return (
    <div className="space-y-3" dir={isArabic ? 'rtl' : 'ltr'}>
      {lines.map((line, i) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return <div key={i} className="h-1" />; // Paragraph break

        const cleanTextWithoutStars = trimmedLine.replace(/\*\*/g, '').replace(/^#+\s*/, '').trim();

        // 1. H2 Box (Blue background)
        // Matches "## Header" or "**Header:**" (but not matching a) or 1))
        const isH2 = /^#{2}\s/.test(trimmedLine) || 
                     (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && !/^[a-zA-Z\u0600-\u06FF]\)/.test(cleanTextWithoutStars));
                     
        if (isH2 && cleanTextWithoutStars.length < 100) {
           return (
             <div key={i} className="bg-[#d2e3f5] py-1.5 px-3 mb-2 flex items-center gap-2 mt-6 max-w-full rounded-sm">
                <span className="text-[#0c4a7e] font-bold text-lg md:text-xl flex items-center gap-2">
                   <span className="text-[1.2rem] leading-none pb-0.5">❖</span> {cleanTextWithoutStars}
                </span>
             </div>
           );
        }

        // 2. H3 Box (Yellow background)
        // Matches "### Header", "a) Header:", "A. Header", "**a) Header:**"
        const isH3Match = /^#{3}\s/.test(trimmedLine) ||
                          /^([a-zA-Z\u0600-\u06FF])[\)\.]\s/.test(cleanTextWithoutStars);
                          
        if (isH3Match && cleanTextWithoutStars.length < 100) {
           return (
             <div key={i} className="mt-4 mb-1">
               <div className="bg-[#fef2cd] inline-flex py-1 px-3 rounded-sm items-center min-w-[40%]">
                  <span className="text-[#1322b2] font-extrabold text-base md:text-lg">
                     {cleanTextWithoutStars}
                  </span>
               </div>
             </div>
           );
        }

        // 3. Numbered List items "1) The base:"
        const isNumberedBlue = /^(\d+)[\)\.]\s(.*)/.exec(cleanTextWithoutStars);
        if (isNumberedBlue) {
           return (
             <div key={i} className={`flex gap-3 items-start group ${isArabic ? 'pr-6' : 'pl-6'} mb-1`}>
               <div className="text-[#0c4a7e] font-extrabold text-base md:text-lg mt-0.5 shrink-0">
                  {isNumberedBlue[1]})
               </div>
               <div className="text-base md:text-lg font-medium text-slate-800 leading-relaxed py-0.5">
                 {renderTextWithTags(isNumberedBlue[2])}
               </div>
             </div>
           );
        }

        // 4. Nested hollow bullet "o " or indented empty circle
        if (trimmedLine.startsWith('o ') || trimmedLine.startsWith('◦ ')) {
          return (
            <div key={i} className={`flex gap-3 items-start group ${isArabic ? 'pr-12' : 'pl-12'} mb-1`}>
              <div className="w-1.5 h-1.5 rounded-full border-2 border-[#1691a5] mt-3.5 shrink-0 bg-transparent" />
              <div className="text-base md:text-lg font-medium text-slate-800 leading-relaxed py-1">
                {renderTextWithTags(trimmedLine.substring(2))}
              </div>
            </div>
          );
        }

        // 5. Normal bullet point "- " or "* " (Red dot)
        if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
          return (
            <div key={i} className={`flex gap-3 items-start group ${isArabic ? 'pr-6' : 'pl-6'} mb-1`}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#f04f46] mt-3.5 shrink-0" />
              <div className="text-base md:text-lg font-medium text-slate-800 leading-relaxed py-1">
                {renderTextWithTags(trimmedLine.substring(2))}
              </div>
            </div>
          );
        }

        // 6. Normal paragraph text
        return (
          <div key={i} className={`text-base md:text-lg font-medium text-slate-800 leading-relaxed ${isArabic ? 'pr-6' : 'pl-6'}`}>
            {renderTextWithTags(line)}
          </div>
        );
      })}
    </div>
  );
};

