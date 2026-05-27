"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import {
  getProductById as getProductDetail,
  updateProduct,
} from "../../../../lib/productService";
import { useFormValidation } from "../../../../hooks/useFormValidation";
import { api } from "../../../../lib/axios";
import "../../../../styles/registration.css";

export default function ProductEditPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.id;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [currentTag, setCurrentTag] = useState("");
  const [tags, setTags] = useState([]);
  const [tagError, setTagError] = useState("");

  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function loadProductData() {
      try {
        const product = await getProductDetail(productId);

        setFormData({
          name: product.name || "",
          description: product.description || "",
          price: String(product.price || ""),
        });
        setTags(product.tags || []);

        if (product.images && product.images.length > 0) {
          const existingImages = product.images.map((url) => ({
            previewUrl: url,
            fileObject: null,
          }));
          setImages(existingImages);
        }
      } catch (error) {
        console.error("기존 데이터 로드 실패:", error);
        alert("상품 정보를 불러오는데 실패했습니다.");
        router.push(`/items/${productId}`);
      }
    }

    if (productId) {
      loadProductData();
    }
  }, [productId, router]);

  const { errors, isFormValid, validateTag } = useFormValidation(
    formData,
    tags,
  );

  const isSubmitValid = isFormValid && images.length > 0 && !isSubmitting;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagChange = (event) => {
    const value = event.target.value;
    setCurrentTag(value);
    setTagError(validateTag(value));
  };

  const handleTagInputKeyDown = (event) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      const tagValue = currentTag.trim().replace(",", "");
      if (!tagValue) return;
      if (tags.includes(tagValue)) {
        alert("이미 등록된 태그입니다.");
        setCurrentTag("");
        return;
      }
      setTags([...tags, tagValue]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    if (!files.length) return;

    const newImages = files.map((file) => ({
      previewUrl: URL.createObjectURL(file),
      fileObject: file,
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (indexToRemove) => {
    const targetImage = images[indexToRemove];

    if (targetImage.previewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(targetImage.previewUrl);
    }
    setImages(images.filter((_, idx) => idx !== indexToRemove));
  };

  const uploadImagesAndGetUrls = async () => {
    const urlResult = [];

    for (const [index, item] of images.entries()) {
      if (
        !item.fileObject &&
        item.previewUrl &&
        item.previewUrl.startsWith("http")
      ) {
        urlResult.push(item.previewUrl);
        continue;
      }

      if (item.fileObject) {
        const uploadFormData = new FormData();
        const originalFile = item.fileObject;

        const fileExtension = originalFile.name
          ? originalFile.name.split(".").pop()
          : "png";
        const cleanFileName = `image_${Date.now()}_${index}.${fileExtension}`;

        const renamedFile = new File([originalFile], cleanFileName, {
          type: originalFile.type,
        });

        uploadFormData.append("image", renamedFile);

        try {
          const response = await api.post("/images/upload", uploadFormData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          const imageUrl = response.data?.url || response.data;
          if (imageUrl && typeof imageUrl === "string") {
            urlResult.push(imageUrl);
          }
        } catch (error) {
          console.error("이미지 업로드 중 실패:", error);
        }
      }
    }

    return urlResult;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    if (images.length === 0) {
      alert("상품 이미지를 최소 1개 이상 등록해주세요.");
      return;
    }

    try {
      setIsSubmitting(true);

      const remoteUrls = await uploadImagesAndGetUrls();

      if (remoteUrls.length === 0) {
        alert("이미지 업로드에 실패했습니다.");
        setIsSubmitting(false);
        return;
      }

      const submitData = {
        ...formData,
        price: Number(formData.price),
        tags,
        images: remoteUrls,
      };

      await updateProduct(productId, submitData);
      alert("상품 정보가 성공적으로 수정되었습니다.");
      router.push(`/items/${productId}`);
    } catch (error) {
      console.error("수정 실패:", error);
      alert(
        error.response?.data?.message ||
          "수정에 실패했습니다. 입력값을 확인해 주세요.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="main-contents">
        <form className="item-registration-form" onSubmit={handleSubmit}>
          <section className="form-header">
            <h2 className="main-title">상품 수정하기</h2>
            <button
              type="submit"
              className={`submit-btn ${isSubmitValid ? "active" : ""}`}
              disabled={!isSubmitValid}
            >
              {isSubmitting ? "수정 중..." : "수정 완료"}
            </button>
          </section>

          <section className="form-input-section">
            <label className="section-title">상품 이미지</label>
            <div className="image-upload-container">
              <label className="image-upload-box">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="image-file-input"
                  onChange={handleImageChange}
                />
                <span className="upload-icon">+</span>
                <span className="upload-text">이미지 변경</span>
              </label>

              {images.map((item, idx) => (
                <div key={idx} className="image-preview-box">
                  <Image
                    src={item.previewUrl}
                    alt={`미리보기 ${idx + 1}`}
                    fill
                    sizes="180px"
                    style={{ objectFit: "cover" }}
                  />
                  <button
                    type="button"
                    className="image-delete-btn"
                    onClick={() => removeImage(idx)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="form-input-section">
            <label className="section-title">상품명</label>
            <input
              name="name"
              type="text"
              className={`form-input ${errors.name ? "error" : ""}`}
              placeholder="상품명을 입력해주세요"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-msg">{errors.name}</p>}
          </section>

          <section className="form-input-section">
            <label className="section-title">상품 소개</label>
            <textarea
              name="description"
              className={`form-textarea ${errors.description ? "error" : ""}`}
              placeholder="상품 소개를 입력해주세요"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && (
              <p className="error-msg">{errors.description}</p>
            )}
          </section>

          <section className="form-input-section">
            <label className="section-title">판매 가격</label>
            <input
              name="price"
              type="number"
              className={`form-input ${errors.price ? "error" : ""}`}
              placeholder="판매 가격을 입력해주세요"
              value={formData.price}
              onChange={handleChange}
            />
            {errors.price && <p className="error-msg">{errors.price}</p>}
          </section>

          <section className="form-input-section">
            <label className="section-title">태그</label>
            <input
              type="text"
              className={`form-input ${tagError ? "error" : ""}`}
              placeholder="태그를 입력해주세요"
              value={currentTag}
              onChange={handleTagChange}
              onKeyDown={handleTagInputKeyDown}
            />
            {tagError && <p className="error-msg">{tagError}</p>}
            <div className="tag-list">
              {tags.map((tag) => (
                <div key={tag} className="tag-chip">
                  <span className="tag-text">#{tag}</span>
                  <button
                    type="button"
                    className="tag-delete-btn"
                    onClick={() => removeTag(tag)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </section>
        </form>
      </main>
      <Footer />
    </>
  );
}
