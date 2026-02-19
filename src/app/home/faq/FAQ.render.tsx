"use client";

import { FAQ_CATEGORIES } from "@/CONSTANTS/faq.constants";
import {
  BentoGrid,
  CategoryCard,
  CategoryTitle,
  FaqItem,
} from "./FAQ.style";
import { FAQHeader } from "@/CONSTANTS/ui.constants";
import PageContainer from "@/components/page-container/PageContainer.style";
import { PageHeader } from "@/components/page-header";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <PageContainer>
      <PageHeader>{FAQHeader}</PageHeader>

      <BentoGrid>
        {FAQ_CATEGORIES.map((category, catIdx) => (
          <CategoryCard
            key={catIdx}
            span2={category.span2}
            span2row={category.span2row}
          >
            <CategoryTitle>{category.title}</CategoryTitle>

            {category.questions.map((item, qIdx) => {
              const key = `${catIdx}-${qIdx}`;
              return (
                <FaqItem
                  key={key}
                  question={item.question}
                  answer={item.answer}
                  isOpen={!!openItems[key]}
                  onClick={() => toggleItem(key)}
                />
              );
            })}
          </CategoryCard>
        ))}
      </BentoGrid>
    </PageContainer>
  );
};

export default FAQ;
