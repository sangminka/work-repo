// AddCodeCategory.tsx
import React, { useState } from 'react'
import TitleCom from '../../components/common/TitleCom'
import ICodeCategory from '../../types/admin/code/ICodeCategory';
import CodecategoryService from '../../services/admin/code/CodeCategoryService';

function AddCodeCategory() {
    // 객체 초기화
  const initialCodeCategory = {
    categoryId: 100,
    categoryName: "",
  };

  // 부서 객체
  const [codeCategory, setCodeCategory] = useState<ICodeCategory>(initialCodeCategory);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면 값
    setCodeCategory({ ...codeCategory, [name]: value });  // 변수 저장
  };


  // 저장 함수
  const saveCodeCategory = () => {
    var data = {
      // 임시 부서 객체
      categoryId: codeCategory.categoryId,
      categoryName: codeCategory.categoryName,
    };

    
    CodecategoryService.create(data)    // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 함수 자동 갱신(리엑트 특징)
  const newCodeCategory = () => {
    setCodeCategory(initialCodeCategory); // 부서 초기화
    setSubmitted(false);  // submitted 변수 초기화
  };

  return (
    <div className="row">
    {submitted ? (
      <div className="col-6 mx-auto">
        <h4>You submitted successfully!</h4>
        <button className="btn btn-success" onClick={newCodeCategory}>
          Add
        </button>
      </div>
    ) : (
      <>
        {/* 제목 start */}
        <TitleCom title="Add CodeCategory" />
        {/* 제목 end */}

        <div className="col-6 mx-auto">
          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="categoryId" className="col-form-label">
                categoryId
              </label>
            </div>

            <div className="col-9">
              <input
                type="number"
                id="categoryId"
                required
                className="form-control"
                value={codeCategory.categoryId}
                onChange={handleInputChange}
                placeholder="categoryId"
                name="categoryId"
              />
            </div>
          </div>

          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="categoryName" className="col-form-label">
                categoryName
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="categoryName"
                required
                className="form-control"
                value={codeCategory.categoryName}
                onChange={handleInputChange}
                placeholder="categoryName"
                name="categoryName"
              />
            </div>
          </div>

          <div className="row g-3 mt-3 mb-3">
            <button
              onClick={saveCodeCategory}
              className="btn btn-outline-primary ms-2 col"
            >
              Submit
            </button>
          </div>
        </div>
      </>
    )}
  </div>
  )
}

export default AddCodeCategory