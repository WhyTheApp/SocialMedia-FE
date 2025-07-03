"use client";

import {
  AddArticleHeader,
  ArticleContentPlaceholder,
  ArticleTitlePlaceholder,
} from "@/CONSTANTS/ui.constants";
import { PageHeader } from "@/components/page-header";
import PageContainer from "@/components/page-container/PageContainer.style";
import {
  CloseIcon,
  CustomInput,
  CustomLargeInput,
  HelpersContainer,
  HorizontalContainer,
  MainContainer,
  ModalContainer,
  PreviewContainer,
  SmallHorizontalContainer,
  StyledHyperlink,
  StyledImageUpload,
  StyledUppercase,
} from "./AddArticle.style";
import { useState } from "react";
import SimpleButton from "@/components/simple-button";
import { ArticleContent, ArticleTitle, MediumText } from "../Articles.style";
import api from "@/services/Requests.service";
import { getUserName } from "@/services/TokenManager";
import {
  ArticleCardDetailsDateSection,
  ArticleCardDetailsNameSection,
  ArticleCardDetailsTextPart,
} from "@/components/article-card/ArticleCard.style";
import { marked } from "marked";
import { useRouter } from "next/navigation";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [linkForHyperlink, setLinkForHyperlink] = useState("");
  const [labelForHyperlink, setLabelForHyperlink] = useState("");

  const [imageAlt, setImageAlt] = useState("");
  const [imageFile, setImageFile] = useState<File | null>();
  const [imageLink, setImageLink] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  const [imageWidth, setImageWidth] = useState("");

  const [isOpenHyperlinkModal, setIsOpenHyperlinkModal] = useState(false);
  const [isOpenImageModal, setIsOpenImageModal] = useState(false);
  const router = useRouter();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const insertUppercase = () => {
    if (content == "") setContent("# ");
    else setContent(content + "\n# ");
  };

  const insertHyperlink = () => {
    setContent(content + ` [${labelForHyperlink}](${linkForHyperlink})`);
  };

  const insertImage = () => {
    setContent(content + getImageMarkdown());
  };

  const uploadArticleImage = async () => {
    const formData = new FormData();
    formData.append("image", imageFile!);

    const response = await api.post("articles/add-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setImageLink(response.data);
  };

  const uploadArticle = async () => {
    await api.post("articles/add", {
      title: title,
      content: content,
      author: getUserName(),
    });

    router.push("/home/articles");
  };

  const getImageMarkdown = () => {
    if (imageWidth || imageHeight)
      return `<img src="${imageLink}" alt="${imageAlt}"${
        imageWidth ? ` width="${imageWidth}"` : ""
      }${imageHeight ? ` height="${imageHeight}"` : ""} />`;
    return `![${imageAlt}](${imageLink})`;
  };

  const AddArticlePart = (
    <MainContainer>
      <PageHeader>{AddArticleHeader}</PageHeader>
      <CustomInput
        onChange={handleTitleChange}
        value={title}
        placeholder={ArticleTitlePlaceholder}
      />
      <HelpersContainer>
        <StyledImageUpload
          onClick={() => {
            setIsOpenImageModal(!isOpenImageModal);
          }}
        />
        <StyledHyperlink
          onClick={() => {
            setIsOpenHyperlinkModal(!isOpenHyperlinkModal);
          }}
        />
        <StyledUppercase onClick={insertUppercase} />
      </HelpersContainer>
      <CustomLargeInput
        onChange={handleContentChange}
        value={content}
        placeholder={ArticleContentPlaceholder}
      />
      <SimpleButton
        onClick={uploadArticle}
        buttonText={"Add article"}
      ></SimpleButton>
    </MainContainer>
  );

  const PreviewPart = (
    <PreviewContainer>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleCardDetailsTextPart>
        <ArticleCardDetailsNameSection>
          {getUserName()}
        </ArticleCardDetailsNameSection>
        <ArticleCardDetailsDateSection>
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </ArticleCardDetailsDateSection>
      </ArticleCardDetailsTextPart>
      <ArticleContent html={marked(content)} />
    </PreviewContainer>
  );

  const HyperlinkModal = isOpenHyperlinkModal && (
    <ModalContainer>
      <CloseIcon
        onClick={() => {
          setIsOpenHyperlinkModal(false);
        }}
      />
      <MediumText>
        Input link and text, then insert it into the article content
      </MediumText>
      <CustomInput
        onChange={(e) => {
          setLinkForHyperlink(e.target.value);
        }}
        value={linkForHyperlink}
        placeholder="Link"
      />
      <CustomInput
        onChange={(e) => {
          setLabelForHyperlink(e.target.value);
        }}
        value={labelForHyperlink}
        placeholder="Label"
      />
      <MediumText>
        Result: [{labelForHyperlink}]({linkForHyperlink})
      </MediumText>
      <SimpleButton
        onClick={insertHyperlink}
        buttonText={"Insert link"}
      ></SimpleButton>
    </ModalContainer>
  );

  const ImageModal = isOpenImageModal && (
    <ModalContainer>
      <CloseIcon
        onClick={() => {
          setIsOpenImageModal(false);
        }}
      />
      <MediumText>Insert image</MediumText>
      <CustomInput
        onChange={(e) => {
          setImageFile(e.target.files![0]);
        }}
        placeholder="Image"
        type="file"
      />
      <SimpleButton
        onClick={uploadArticleImage}
        buttonText={"Upload image"}
      ></SimpleButton>

      <MediumText>Give the image optional props</MediumText>
      <CustomInput
        onChange={(e) => {
          setImageAlt(e.target.value);
        }}
        value={imageAlt}
        placeholder="Image text"
      />
      <SmallHorizontalContainer>
        <CustomInput
          onChange={(e) => {
            setImageHeight(e.target.value);
          }}
          value={imageHeight}
          placeholder="Height"
          type="number"
        />
        <CustomInput
          onChange={(e) => {
            setImageWidth(e.target.value);
          }}
          value={imageWidth}
          placeholder="Width"
        />
      </SmallHorizontalContainer>
      <MediumText>Result: {getImageMarkdown()}</MediumText>
      <SimpleButton
        onClick={insertImage}
        buttonText={"Insert image"}
      ></SimpleButton>
    </ModalContainer>
  );

  return (
    <PageContainer>
      <HorizontalContainer>
        {AddArticlePart}
        {PreviewPart}
      </HorizontalContainer>
      {HyperlinkModal}
      {ImageModal}
    </PageContainer>
  );
};

export default AddArticle;
