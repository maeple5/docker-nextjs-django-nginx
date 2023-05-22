## 以下のQiita記事で扱っているソースコードリポジトリです。

[Docker ComposeでNext.js＋Django+Nginx＋MySQLの環境構築](https://qiita.com/maeple5/items/8809813f21be9219c941)
# 使用方法
リポジトリをcloneする

    $ git clone https://github.com/maeple5/docker-nextjs-django-nginx.git
    $ cd .\docker-nextjs-django-nginx\

Djangoプロジェクト内の`.env.example`ファイルをコピーして`.env`にリネームする
~~~
SECRET_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
DEBUG=False
~~~


~~~
.
├── config
├── static
├── staticfiles
├── todo
├── .env  <----- copy & rename
├── .env.example
└── Dockerfile
└── manage.py
└── requirements.txt
~~~
次のコマンドを実行　　

    $ docker-compose up
DBコンテナが無事に立ち上がったら別のターミナルで以下を実行

    $ docker-compose run --rm web-back sh -c "python manage.py migrate"
    $ docker-compose run --rm web-back sh -c "python manage.py createsuperuser"
    $ docker-compose run --rm web-back sh -c "python manage.py collectstatic"

- ブラウザで[http://localhost:8080/admin](http://localhost:8080/admin)にアクセスし、作成した管理者アカウントでログインする。

![1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3288404/9e192f93-3974-c636-eabb-b293ebcd43f6.png)

- 適当にTodoを追加する。

![2.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3288404/68f8c3c0-0ea5-0703-a6a5-ef76da02c658.png)

- [http://localhost](http://localhost)にアクセスしてフロントエンドのページが表示されることを確認し、clickボタンを押す

![3.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3288404/77bf5b2e-ee17-c64e-f931-75e8c9534a5e.png)

- 追加したTodoが取得され表示される

![4.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3288404/d315914d-8811-24ea-9df0-b482ab856d05.png)
