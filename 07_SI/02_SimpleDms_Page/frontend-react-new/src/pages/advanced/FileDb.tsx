// FileDb.tsx
// 첨부파일 수정 페이지
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import IFileDb from '../../types/advanced/IFileDb';
import FileDbService from '../../services/advanced/FileDbService';

function FileDb() {
    // todo 변수 부분
    
  // 전체조회 페이지에서 전송한 기본키(dno)
  const { uuid } = useParams();
  // 강제페이지 이동 함수
//   let navigate = useNavigate();

  const initialFileDb = {
    uuid : null,       // 기본키(범용적으로 유일한 값을 만들어주는 값)
    fileTitle : "",     // 제목
    fileContent : "",   // 내용
    fileUrl : "",       // 파일 다운로드 URL

  };


  // 수정될 객체
  const [uploadFileDb, setUploadFileDb] = useState<IFileDb>(initialFileDb);
  // 화면에 수정 성공 메세지 찍기 변수
  const [message, setMessage] = useState<string>("");
  // todo: 현재 선택한 파일을 저장할 배열 변수
  const [selectedFiles, setSelectedFiles] = useState<FileList>();
  // todo 함수 부분

  // 상세조회 함수
  const getFileDb = (uuid: string) => {
    FileDbService.getFileDb(uuid)          // 벡엔드로 상세조회 요청
      .then((response: any) => {
        setUploadFileDb(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + uuid 값이 바뀌면 실행
  useEffect(() => {
    if (uuid) getFileDb(uuid);
  }, [uuid]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUploadFileDb({ ...uploadFileDb, [name]: value });
  };

  // 수정 함수(파일 첨부)
  const updateFileDb = () => {

    // 파일 선택한 변수
    let currentFile = selectedFiles?.[0];// 1st 선택한 첨부 파일

     FileDbService.updateFileDb(uploadFileDb, currentFile) // 벡엔드로 수정 요청
      .then((response: any) => {
        console.log(response.data);
        setMessage("수정 되었습니다.");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

   // todo: 파일 선택상자에서 이미지 선택시 실행되는 함수
 // 파일 선택상자 html 태그 : <input type="file" />
 const selectFile = (event:any) => { 
    // 화면에서 이미지 선택시 저장된 객체는 : event.target.files
    // 변수명 as 타입 : 개발자가 변수가 무조건 특정 타입이라고 보증함
    //                 (타입스크립트에서 체크 안함)
    setSelectedFiles(event.target.files as FileList)
  }

 

  return (
    <div className="edit-form">
      {/* <!-- 이미지명(fileTitle) 입력 박스 시작 --> */}
      <div className="mb-3 col-md-12">
        <label htmlFor="fileTitle" className="form-label">
          이미지명
        </label>
        <input
          type="text"
          className="form-control"
          id="fileTitle"
          required
          name="fileTitle"
          value={uploadFileDb.fileTitle}
          onChange={handleInputChange}
        />
      </div>
      {/* <!-- 이미지명 입력 박스 끝 --> */}

      {/* <!-- 이미지내용 입력 박스 시작 --> */}
      <div className="mb-3 col-md-12">
        <label htmlFor="fileContent" className="form-label">
          내용
        </label>
        <input
          type="text"
          className="form-control"
          id="fileContent"
          required
          name="fileContent"
          value={uploadFileDb.fileContent}
          onChange={handleInputChange}
        />
      </div>

      {/* <!-- 이미지내용 입력 박스 끝 --> */}
      <div className="mb-3 col-md-12">
        <img src={uploadFileDb.fileUrl} className="card-img-top" alt="강의" />
      </div>

      {/* upload 선택상자/버튼 start */}
      <label className="btn btn-default p-0 mb-3 ">
        <input type="file" onChange={selectFile} />
      </label>

      <button
        className="btn btn-success mb-3 "
        disabled={!selectedFiles}
        onClick={updateFileDb}
      >
        Update
      </button>
      {/* upload 선택상자/버튼 end */}

      {/* upload 성공/실패 메세지 출력 시작 */}
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      {/* upload 성공/실패 메세지 출력 끝 */}
    </div>  )
}

export default FileDb