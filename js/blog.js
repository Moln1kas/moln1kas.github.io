$.ajax({
    url: 'http://p95383bn.beget.tech/moln1kas/blog.php',
    method: 'get',
    dataType: 'html',
    data: {text: 'Текст'},
    success: function(data){
        var blogs = JSON.parse(data);
        load_blogs(blogs);
    }
});

function load_blogs(blogs) {
    for (let i = 0; i < blogs.length; i++) {
        let blog = $(
            `
                <div class="info__card">
                    <header class="info__card__header">
                        <h3 class="info__card__title">${blogs[i]['title']}</h3>
                        <div class="info__card__date__container">
                            <time class="info__card__date">${blogs[i]['date']}</time>
                        </div>
                    </header>
                </div>
            `
        );

        $("#blogs").append(blog);
    }
}