package com.example.simpledms.model.dto.normal;

/**
 * packageName : com.example.simpledms.model.dto.normal
 * fileName : ReplyBoardDto
 * author : GGG
 * date : 2023-10-26
 * description : 계층형 쿼리 DTO
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-26         GGG          최초 생성
 */
public interface ReplyBoardDto {
// 속성 x => getter
//     private Integer bid;
//    private String boardTilte;
//    private String boardContent;
//    private String boardWriter;
//    private Integer viewCnt;
//    private Integer boardGroup; // 트리구조 최상위 부모 노드( 부모가 있을 경우 : 부모번호, 없을 경우 : 자신의 게시판번호 )
//    private Integer boardParent;// 자신의 부모 노드 ( 부모가 있을 경우 : 부모번호, 없을 경우 : 0 )
    public Integer getBid();
    public String getBoardTitle();
    public String getboardContent();
    public String getboardWriter();
    public Integer getViewCnt();
    public Integer getboardGroup();
    public Integer getboardParent();


}
