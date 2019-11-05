//Недописал скрипт по смене видео фона, не воспроизводиться на странице((((((((

var videos = {
    'videos_list_0': [
        "https://timflach.com/wp-content/uploads/2014/02/SELECT_02.mp4",
        "https://timflach.com/wp-content/uploads/2014/02/SELECT_01.mp4"
    ]
};

(function() {
    const video = document.querySelectorAll('video[data-vid]');

    for(let i = 0; i < video.length; i++){
        const n = video[i].hasAttribute('data-video') ? Number(video[i].getAttribute('data-video')) : 0,
            r = video[i].getAttribute('reiteration') === 'true',
            ap = video[i].getAttribute('autoplay') === 'true',
            vl = video[i].hasAttribute('data-vid') ? video[i].getAttribute('data-vid') : null;
        if(videos[vl]){
            video[i].src = videos[vl][n];
            if(ap){
                video[i].play();
            }
            video[i].video = n;
            video[i].onended = function() {
                if(this.video === videos[vl].length - 1){
                    if(r){
                        this.video = 0;
                        this.src = videos[vl][0];
                        this.play();
                    }
                }else{
                    this.video = this.video + 1;
                    this.src = videos[vl][this.video];
                    this.play();
                }
            };
        }else{
            console.error('Undefined video list!');
        }
    }
}());