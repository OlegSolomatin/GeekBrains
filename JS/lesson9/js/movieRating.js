﻿$.ajax({url:"http://rating.kinopoisk.ru/"+kp_id+".xml",dataType:"xml",success:
        function(data){$(data).find("rating").each(function() {
            var kp_rating=$(this).find('kp_rating').html();
            var kp_num_vote=$(this).find('kp_rating').attr('num_vote');
            var imdb_rating=$(this).find('imdb_rating').html();
            var imdb_num_vote=$(this).find('imdb_rating').attr('num_vote');
            $("#kp_rating").html(kp_rating);
            $("#kp_num_vote").html(kp_num_vote);
            $("#imdb_rating").html(imdb_rating);
            $("#imdb_num_vote").html(imdb_num_vote)
        })
}
});