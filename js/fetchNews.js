

const getDateCorrectFormate = (isoDate) => {
    const date = new Date(isoDate);
    const fullDate = date.toLocaleString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });

    const fullTime = date.toLocaleString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
    });

    return `<span class="news-date">${fullDate}</span>${fullTime}`;
};
export const loadSearchNews = (query) =>{

    document.querySelector('.news .news-list').remove();
    const ul = document.createElement('ul');
    ul.className = 'news-list';
    document.querySelector('.news .container').append(ul);


    fetch(`https://newsapi.org/v2/everything?q=${query}`, {
        headers: {
            'X-Api-Key': '66ee3faec9b04231a93bb677322b4631',
        },
    })
        .then((response) => response.json())
        .then((result) => {
            result.articles.forEach((item) => {
                const li = document.createElement('li');
                li.className = 'news-item';
    
                const img = document.createElement('img');
                img.src = item.urlToImage;
                img.alt = item.title;
                img.className = 'img-title';
                img.height = '300';
    
                const h3 = document.createElement('h3');
                h3.className = 'news-title';
    
                const link = document.createElement('a');
                link.href = item.url;
                link.className = 'news-link';
                link.target = '_blank';
                link.textContent = item.title;
    
                h3.append(link);
    
                const description = document.createElement('p');
                description.className = 'news-description';
                description.textContent = item.description;
    
                const footer = document.createElement('div');
                footer.className = 'news-footer';
    
                const time = document.createElement('time');
                time.className = 'news-datetime';
                time.dateTime = item.publishedAt;
                time.innerHTML = getDateCorrectFormate(item.publishedAt);
    
                const author = document.createElement('p');
                author.className = 'news-author';
                author.textContent = item.author;
                footer.append(time, author);
    
                li.append(img, h3, description, footer);
    
                document.querySelector('.news .news-list').append(li);
            });
        });
    
}
