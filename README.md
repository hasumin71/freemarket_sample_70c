# freemarket_sample_70c
* プログラミングスクールTECH::EXPERTの最終課題でフリーマーケットアプリを作成しました.
* 制作期間：約1ヶ月間
* メンバー5名でのアジャイル型開発（スクラム）

# リンク
* http://18.180.9.254 
* 上記のリンクよりログインが可能です。
* Basic認証を設定しておりますので下記IDとpassの入力をお願い致します。
* ID:admin
* pass:2222

# テストユーザー
* 購入者用アカウント
* メールアドレス: aaa@gmail.com
* パスワード: aaaaaaa

* 購入用カード情報
* 番号：4242424242424242
* 期限：01/25
* セキュリティコード：123

* 出品者用アカウント
* メールアドレス: bbb@gmail.com
* パスワード: aaaaaaa

# 使用技術一覧
* ruby 2.5.1
* rails 5.2.4.1
* JQuery 4.3.5
* MySQL 5.6.47
* Haml 5.1.2
* Sass 3.7.4
* Rspec 3.9.0
* AWS(EC2・S3)
* Github


# /担当箇所一覧
* スクラムマスター
* デプロイ作業全般
* DB設計全般
* 商品詳細画面(フロントエンド・サーバーサイド)
* 商品編集画面(フロントエンド・サーバーサイド)
* 商品削除機能
* コメント機能(投稿・削除)

# 担当箇所詳細
# ①DB設計全般
* 本アプリケーションのDB設計を担当しました。
* ![freemarket_sample_70c_ER図](https://user-images.githubusercontent.com/59963342/77608611-17cc5780-6f61-11ea-9516-1676fec38e3c.png)

# ②商品出品画面(フロントエンド・サーバーサイド)
* 商品出品に必要な情報を記入・選択するページを担当しました。
* ![b3cf7fb5ca92f09bb28febdcc6e1976e](https://user-images.githubusercontent.com/60636877/77890896-1ecdcf80-72ab-11ea-9843-dbfa588d4cfa.gif)

* JQueryを使用して画像を複数投稿&削除できる機能などを実装しました。
* ![e0068da4aa68d46b9d3361c9fa5d0e56](https://user-images.githubusercontent.com/60636877/77890448-6e5fcb80-72aa-11ea-8706-275c9558ccfc.gif)

# ③商品購入確認&完了画面(フロントエンド)
* 購入する商品の情報&支払い方法などが表示されるページを担当しました。
* ![79375956e5ee0603a6da5ebf154c4cef](https://user-images.githubusercontent.com/60636877/77892326-6c4b3c00-72ad-11ea-9db7-c7ffa5772264.gif)

# ④商品購入機能(フロントエンド・サーバーサイド)
* payjpを導入して、クレジットカード情報を登録/削除、カードで購入できる機能を実装しました。
* ![f3dd52748eb07ca4861d3dc2f48136b0](https://user-images.githubusercontent.com/60636877/77892846-378bb480-72ae-11ea-9737-6f59c713a57f.gif)
* ![82c9882ae1e7ecebe7c734ae90f5d6f0](https://user-images.githubusercontent.com/60636877/77893335-be409180-72ae-11ea-918b-8485b1bf055d.gif)


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|encrypted_password|string|null: false|

### Association
- has_one :profile
- has_one :creditcard
- has_many :products


## profilesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|foreign_key: true|
|lastname|string|null: false|
|lastname_kana|string|null: false|
|firstname|string|null: false|
|firstname_kana|string|null: false|
|birthday|date|null: false|
|postal_code|string|null: false|
|prefecture|string|null: false|
|city|string|null: false|
|address|string|null: false|
|building|string||
|tel|string||


### Association
- belongs_to :user


## creditcardsテーブル
|Column|Type|Options|
|------|----|-------|
|card_id|integer|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
|customer_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :user


## productsテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false,foreign_key: true|
|brand|string|
|item_name|string|null: false|
|item_detail|text|null: false|
|item_size|string||
|condition_id|references|null: false,foreign_key: true|
|price|integer|null: false|
|category_id|references|null: false,foreign_key: true|
|delivery_pay_id|references|null: false,foreign_key: true|
|prefecture_id|references|null: false,foreign_key: true|
|lead_time|string|null: false|
|ststus|integer|null: false|



### Association
- belongs_to :user
- belongs_to :category
- has_many :images


## imagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|product|references|null: false, foreign_key: true|


### Association
- belongs_to :product


## categorysテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|ancestry|integer||


### Association
- has_many :products
