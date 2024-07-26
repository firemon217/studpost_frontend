<template>
    <div class="comment">
        <div class="info">
            <div class="profile">
                <img :src="{userIcon: userIcon}"/> {{comment.user_data.surName}} {{comment.user_data.firstName}} {{comment.user_data.middleName}}
            </div>
            <div class="operation">
                <Date :pdate="this.comment.createdAt"></Date><my-operation :isComment="true" :id="this.comment.unique_id" @remove="$emit('remove', comment)" :operation="this.comment.operations" v-if="this.comment.operations"></my-operation>
            </div>
        </div>
        <div class="content" v-if="!update">
            {{content}}
        </div>
        <my-textarea v-model="this.content" v-if="update" class="comment_redact"><div>{{content}}</div></my-textarea>
        <div class="button-container">
            <my-button class="comment-reply" v-if="!this.comment.operations" @click="$emit('reply', comment.user_data.firstName)">
                Ответить
            </my-button>
            <my-button class="comment-reply" v-if="this.comment.operations && !update" @click="this.update = true">
                Изменить
            </my-button>
            <my-button class="comment-reply" v-if="update" @click="redactComment">
                Отправить изменения
            </my-button>
        </div>
    </div>
</template>

<script>

import Date from '@/components/Posts/Parts/Date.vue';

export default {

    name: "comment-block",
    components: {
        Date
    },
    props: 
    {
        comment: Object
    },
    data()
    {
        return {
            content: this.comment.content,
            update: false,
            userIcon: this.comment.user_data.persPhotoData
        }   
    },
    methods:
    {
        async redactComment()
        {
            const response = await fetch(`http://127.0.0.1:5000/api/${this.$route.params.id}/update_comment`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": document.cookie.split('session_token=')[1]	
                },
                body: JSON.stringify({
                    comment_id: this.comment.unique_id,
                    content: this.content
                })
            })
            if(!response)
            {
                alert('Не удалось добавить комментарий')
                this.update = false
            }
            if(/2../.test(String(response.status)))
            {
                this.update = false
            }
            this.update = false
        }
    }
}
</script>

<style scoped>

    .comment
    {
        width: 100%;
        min-height: 33vh;
        background-color: white;
        margin-top: 40px;
        border-radius: 30px;
        box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 20px 0;
    }

    .info
    {
        width: 90%;
        height: 6.6vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .info > .profile
    {
        height: 100%;
        color: #7C7C7C;
        font-size: 1.5em;
        display: flex;
        align-items: center;
        font-style: italic;
    }

    .info > .profile > img
    {
        height: 100%;
        margin-right: 40px;
    }

    .info > .operation
    {
        height: 100%;
        color: #CECECE;
        font-size: 1.5em;
        display: flex;
        align-items: center;
    }

    .content
    {
        width: 90%;
        min-height: 8.3vh;
        color: #303030;
        font-size: 1.5em;
        word-break: break-all;
        margin: 20px 0;
        overflow: visible;
    }

    .button-container
    {
        width: 90%;
        display: flex;
        justify-content: right;
    }

</style>