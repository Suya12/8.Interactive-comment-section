window.addEventListener("load", function() {
    
    $container = document.querySelector(".container");  

    jsonParse();

    
    async function jsonParse() {
        const response = await fetch('data.json');
        const jsonData = await response.json();
        var comments = jsonData['comments'];

        makeChatBox(comments);
 
        
        // console.log(JsonReplies[1][1]);
    }


    function makeChatBox(comments) {
        for (var i = 0; i < comments.length; i++) {
            var TotalDiv = document.createElement("div");
            TotalDiv.className="total-box"
            var myDiv = document.createElement("div");
            myDiv.className="chat-box";

            var replyImg = document.createElement("img");
            var profileImg = document.createElement("img");
            var name = document.createElement("span");
            var createTime = document.createElement("span");
            var content = document.createElement("p");
            var replyButton = document.createElement("input");

            profileImg.className = "profile-img";
            name.className = "name";
            createTime.className = "createdAt";
            
            profileImg.src = comments[i]["user"]["image"]["png"];

            name.textContent = comments[i]["user"]["username"];
            createTime.textContent = comments[i]["createdAt"];
            content.textContent = comments[i]["content"];
            
            replyImg.className ="arrow-img";
            replyImg.src="./images/icon-reply.svg";

            replyButton.type = "button";
            replyButton.value = "reply";
            replyButton.className = "reply-button";

            // replyButton.onclick = function () {
            //     makeInputBox(0);
            // }

            $container.appendChild(TotalDiv);

            TotalDiv.appendChild(myDiv);
            myDiv.appendChild(replyButton);
            myDiv.appendChild(replyImg);
            myDiv.appendChild(profileImg);
            myDiv.appendChild(name);
            myDiv.appendChild(createTime);
            myDiv.appendChild(content);


            
            // console.log("i :" ,i,"length :",comments[i]["replies"].length);
            if( comments[i]["replies"].length > 0) {
                for(var j = 0; j < comments[i]["replies"].length; j++) {
                    makeReplyBox(comments[i]["replies"][j]);
                    // console.log(j);
                }
            }

        }
    }

    function makeReplyBox(replies) {

        var myDiv2 = document.createElement("div");
        myDiv2.className="reply-box";

        var replyImg = document.createElement("img");
        var profileImg = document.createElement("img");
        var name = document.createElement("span");
        var createTime = document.createElement("span");
        var content = document.createElement("p");
        var replyButton = document.createElement("input");

        profileImg.src = replies["user"]["image"]["png"];
        name.textContent = replies["user"]["username"];
        createTime.textContent = replies["createdAt"];
        content.textContent = replies["content"];

        name.className = "name";
        createTime.className = "createdAt";
        profileImg.className = "profile-img";
        replyImg.className ="arrow-img";
        replyImg.src="./images/icon-reply.svg";

        replyButton.type = "button";
        replyButton.value = "reply";
        replyButton.className = "reply-button";

        $container.appendChild(myDiv2);

        myDiv2.appendChild(replyButton);
        myDiv2.appendChild(replyImg);
        myDiv2.appendChild(profileImg);

        myDiv2.appendChild(name);
        myDiv2.appendChild(createTime);
        myDiv2.appendChild(content);

    }

    var myChatDiv = this.document.querySelector(".my-chat-div");

    const dialog = myChatDiv.querySelector("dialog");
    const showButton = myChatDiv.querySelector(".send-button");
    const closeButton = myChatDiv.querySelector("dialog button");

    showButton.addEventListener("click", () => {
        dialog.showModal();

    });

    closeButton.onclick = function() {
        dialog.close();
    };

    function a() {
        var replyButtons = $container.querySelectorAll(".total-box");

        //.querySelector(".chat-box").querySelector(".reply-button");
        console.log($container);
        console.log(replyButtons);
    }
    

    //.onclick = function() {makeInputBox(i);}
    function makeInputBox(count) {
        var newInputBox = document.createElement("div");
        newInputBox.className="my-chat-div";
        newInputBox.innerHTML =`
            <img src="./images/avatars/image-juliusomo.png">
            <input type="text" class="bottom-input-box">
            <input type="button" value="SEND" class="send-button">

            <dialog style="text-align: center;">
                <h1>Are you sure?</h1>
                <button style="padding: 5%;" autofocus>Yes, Send</button>
            </dialog>
        `;

        var totalBoxs = $container.querySelectorAll(".total-box");

        console.log(count);
        totalBoxs[count].appendChild(newInputBox);
    }

});

/*

makeChatBox -> 게시글인 total box -> chat box 를 만듬.
makeReplyBox -> 댓글인 reply box 만듬.

makeInputBox -> reply 버튼 누르면 밑에 댓글 달 수 있도록 div 섹션이 생김.
1. 그럼 makeInputBox는 누구의 자식이어야 하는가 ?

-> 당연히 total box의 자식.

2. 리플 버튼이 눌렸을 때 몇번째 토탈 박스에 있는 놈인지 어떻게 알지?

리플 버튼이 거꾸로 타고 올라가 ?
그리고 리플 버튼 두번 누르면 닫히던가 해야됌. 계속 생겨남.
댓글 내용 추가는 어떻게 구현?

그리고 게시글에 댓글 달리는 것도 구현 안했음.

*/