
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "/authors",
    "title": "Authors",
    "body": "{% for author in site. authors %}                       {% if author[1]. gravatar %}                {% else %}                {% endif %}                  {% if author[1]. web %}                       {% endif %}          {% if author[1]. twitter %}                      {% endif %}          {% if author[1]. email %}                      {% endif %}                                     {{ author[1]. display_name }}:         {{ author[1]. description }}                {% endfor %}"
    }, {
    "id": 3,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "/contact",
    "title": "Contact",
    "body": "  Please send your message to {{site. name}}. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "/when-life-gives-you-lemons-read-manga/",
    "title": "When life gives you lemons, read manga",
    "body": "2021/05/25 - *Spoiler alert for Demon Slayer after the Mugen Train arc I spent part of the weekend complaining with a friend about how bad church doctrine ruined important parts of our lives. Even though we’ve grown past and overcome many of those ideas, we still feel the consequences of those teachings. Those are still years of our lives we can never get back and we’re still suffering from the decisions we made based on those ideas. On my flight back home, I was reading Demon Slayer, chapter 69, and there was a line that really hit home. At this point in the story, the main character, Tanjiro has watched more people die without having the power to do anything to stop it. He’s in mourning and struggling with his weakness. He says he wishes there was a way to instantly become strong enough to have protected his comrade, but accepts the fact that there is “no such method”. He then says, “The only option is to struggle on. All I can do is move forward no matter how difficult or frustrating it is. "
    }, {
    "id": 8,
    "url": "/are-same-experiences-required-for-empathy/",
    "title": "Are the same experiences required for empathy?",
    "body": "2021/03/23 - I have had several discussion in the past few month about people with charmed lives. These are people for whom life was relatively easy, not necessarily perfect, but low resistance. For example, consider a person who’s slightly overweight who decides to start working out and with a little instruction develops a habit and physique. Another example, what is the person who find “the [actual] one” the first time they date. Now imagine this is how this person lives most of there lives, this is what we described as a charmed life. It’s not to say that these people do not experience difficulties, it’s to suggest they don’t experience any major difficulties that they cannot overcome through will and wit. These people do not necessarily understand the struggle that many others have with building a habit or ending multiple relationships. They haven’t experienced what it means to struggle in these areas without a positive outcome. All this to say, they cannot empathize with a non-insignificant portion of the population. This lead me to wonder what is the connection is between empathy and experience. I believe the answer to this question is yes, though not necessarily the exact same scenario, but the same feelings and parallel. For example, someone who feels trapped in a marriage might be able to empathize with an addict, given they both have experienced some level of hopelessness. Likewise, someone who is struggling with opening up because they’ve been burned emotionally might be able to relate to a person who’s afraid to connect because they’ve been lost their closest relationships to death. Keeping in mind these examples, I don’t know if I believe you can effectively empathize without some comparative experience. Even if you believe your story compares, the other person needs to believe you understand their experience also. "
    }, {
    "id": 9,
    "url": "/how-do-you-be-vulnerable/",
    "title": "How do you be vulnerable?",
    "body": "2020/11/25 - Listening to research-based self-improvement books is a hobby of mine. One of myfavorite authors is Brene Brown who wrote on the power of vulnerability. As Ilistened to the book, it quickly became apparent that I had built up walls andneeded to become more vulnerable. The question was, “how do you be vulnerable?” Even though I came to understand the idea of vulnerability and how it looked inother people’s lives, I realized those examples didn’t translate well to mylife. I’ve learned that when I’m not sure about something within myself, I needto watch myself for a while. I do this in two ways, 1) I try to relive momentsin my mind and see what feelings it invokes, 2) I pay attention to how I feelin real time. After doing these exercises I was able to figure out when I lifewas giving me an opportunity to be vulnerable. It’s when I hesitate to say ordo something because something inside me is afraid of how I’ll be received. Ihave come to believe that if there isn’t some level of discomfort that I’m notactually being vulnerable. "
    }, {
    "id": 10,
    "url": "/god-speaking/",
    "title": "Did God really speak to that person?",
    "body": "2020/06/16 - Something I’ve often struggled with is when people talk about how God told them to do something. Most of the time my skepticism is determined to be reality. Though their are those rare instances, where everything seems to line up in a way that suggest maybe, just maybe, their was some divine direction. Personally, when God leads a person, it will play out like a man living their life and less like a person getting clear, direct instructions from above. I think the reason you hear people talk about hearing God’s voice the way they do is because of the popular Christian themes that exist today have a very pentecostal root. We’ve been taught to expect God to speak to us “clearly”, so much so we seek it often to our disappointment, or force it to our inevitable embarrassment. It reminds me of a verse, which I particularly like in the KJV style:  For now we see through a glass, darkly;1 Corinthians 13:12a So instead of spending so much effort removing all the uncertainty from our lives, we should instead learn to trust the Son and to love as Christ loved us. "
    }, {
    "id": 11,
    "url": "/what-you-say-what-you-do/",
    "title": "What do I really want?",
    "body": "2020/05/17 - During a book club on “How to Win Friends and Influence People”, one of the members mentioned something a co-worker said to him.  What do you want? What do you act like you want?It’s so true, we often say we want success, but do are actions and step agree? "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});