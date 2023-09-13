// 코딩테스트 문제 : 바탕화면 정리
function solution(wallpaper) {
    let left;
    let right;
    let top;
    let bottom;

    for (let i=0; i < wallpaper.length; i++) {
        let idx = wallpaper[i].indexOf("#");
        let lastIdx = wallpaper[i].lastIndexOf("#");

        if (idx != -1) {
            if (left == null || idx < left) {
                left = idx;
            }
        }

        if (lastIdx != -1) {
            if (!right || right < lastIdx) {
                right = lastIdx;
            }

            if (top == null) {
                top = i;
            }

            if (bottom == null || bottom < i){
                bottom = i;
            }
        }

    }

    return [top, left, bottom+1, right+1];
}