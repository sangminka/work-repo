// Code.tsx : rfce : 상세조회
import React, { useEffect, useState } from 'react'
import TitleCom from '../../components/common/TitleCom'
import { useNavigate, useParams } from 'react-router-dom';
import ICode from '../../types/admin/code/ICode';
import CodeService from '../../services/admin/code/CodeService';

function Code() {
    // 전체조회 페이지에서 전송한 기본키(codeId)
  const { codeId } = useParams();
  // 강제페이지 이동 함수
  let navigate = useNavigate();

  // 객체 초기화(상세조회 : 기본키 있음)
  const initialCode = {
    codeId: 0,
    codeName: "",
    categoryId: 0,
    categoryName: "",
    useYn: "Y",
  };

  // 수정될 객체
  const [code, setCode] = useState<ICode>(initialCode);
  // 화면에 수정 성공 메세지 찍기 변수
  const [message, setMessage] = useState<string>("");

  // 상세조회 함수
  const getCode = (codeId: string) => {
    CodeService.get(codeId)          // 벡엔드로 상세조회 요청
      .then((response: any) => {
        setCode(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + codeId 값이 바뀌면 실행
  useEffect(() => {
    if (codeId) getCode(codeId);
  }, [codeId]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCode({ ...code, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setCode({ ...code, [name]: value });
  };


  // 수정 함수
  const updateCode = () => {
    CodeService.update(code.codeId, code) // 벡엔드로 수정 요청
      .then((response: any) => {
        console.log(response.data);
        setMessage("The code was updated successfully!");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <>
    {/* 제목 start */}
    <TitleCom title="Code Detail" />
    {/* 제목 end */}

    <>
      {code ? (
        <div className="col-6 mx-auto">
          <form>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="codeId" className="col-form-label">
                  codeId
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="codeId"
                  disabled
                  className="form-control"
                  value={code.codeId}
                  onChange={handleInputChange}
                  placeholder="codeId"
                  name="codeId"
                />
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="codeName" className="col-form-label">
                  codeName
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="codeName"
                  disabled
                  className="form-control"
                  value={code.codeName}
                  onChange={handleInputChange}
                  placeholder="codeName"
                  name="codeName"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="categoryId" className="col-form-label">
                  categoryId
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="categoryId"
                  disabled
                  className="form-control"
                  value={code.categoryId}
                  onChange={handleInputChange}
                  placeholder="categoryId"
                  name="categoryId"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="unitPrice" className="col-form-label">
                  Use Y/N
                </label>
              </div>
              <div className="col-9">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  id="useYn"
                  value={code.useYn}
                  onChange={handleSelectChange}
                  name="useYn"
                >
                  <option value="Y">사용함</option>
                  <option value="N">사용 안함</option>
                </select>
              </div>
            </div>
          </form>

          <div className="row g-3 mt-3 mb-3">
            <button
              type="submit"
              onClick={updateCode}
              className="btn btn-outline-success ms-2 col"
            >
              Update
            </button>
          </div>

          <p>{message}</p>
        </div>
      ) : (
        <div className="col-6 mx-auto">
          <br />
          <p>Please click on a CodeNop...</p>
        </div>
      )}
    </>
  </>
  )
}

export default Code