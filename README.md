# DrivenPass-Back
<div align="center">
	<img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/locked_1f512.png">
</div>

<div align="center">
  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/JWT-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" height="30px"/>
  
</div>

# Table of Contents

- [Getting Started](#getting-started)
  - [Models](#models)
    - [users ](#user-model-users)
    - [safeNote ](#safeNote-model-safeNotes)
    - [wifi model](#wifi-model-wifi)
    - [Document model](#document-model-documents)
    - [Credential model](#credential-model-credentials)
    - [  card ](#card-model-cards)
<!-- Getting Started -->


# Getting Started

To clone the project, run the following command:

```git
git clone https://github.com/NinaS23/DrivenPass-Back.git
```

Then, navigate to the project folder and run the following command:

```git
npm install
```

Finally, start the server:

```git
npm start
```

<!-- Models -->

## Models

### users model _`users`_

- `id`: unique identifier for each user. 'serial primary key'
- `email`: The user's email. An email may only be registered once. `text`
- `password`: The user's password. `text`
- `createdAt`: The date and time when the user was created. `timestamp`

### Credential model _`credentials`_

- `id`: A unique identifier for each credential. `serial primary key`
- `userId`: The user that created the credential. `int`
- `username`: The username of the credential. `text`
- `password`: The password of the credential. The inserted data is encrypted, and decrypted upon query. `text`
- `title`: A title for the credential. Each user can only have one credential with the same title. `text`
- `url`: The URL of the credential. `text`
- `createdAt`: The date and time when the credential was created. `timestamp`

### safeNote model _`safeNotes`_

- `id`: A unique identifier for each note. `serial primary key`
- `userId`: The user that created the note. `int`
- `title`: A title for the note. Each user can only have one safeNote with the same title.  `text`
- `note`: The content of the safeNote. Up to 1000 characters long. `text`
- `createdAt`: The date and time when the note was created. `timestamp`

###  card model _`cards`_

- `id`: A unique identifier for each credit card. `serial primary key`
- `userId`: The user that created the credit card. `int`
- `number-card`: The credit card number. up to 16 characters long and  min 15 characters long 'text'
- `name`: The credit card owner name. `text`
- `title`: A title for the credit card. Each user can only have one credit card with the same title. `text`
- `expirationDate`: The credit card expiration date. The date must follow the format **YYYY-MM-DD**.`text`
- `CVC`: The credit card CVC. The inserted data is encrypted, and decrypted upon query. must have 3 characters long `text`
- `password`: The credit card password. The inserted data is encrypted. `text`
- `isVirtual`: Whether the credit card is virtual or not. `bool`
- `type`: The credit card type. Must either be '**credit**', '**debit**' or '**debitAndCredit**'. `enum`


### wifi model _`wifi`_

- `id`: A unique identifier for each network. `serial primary key`
- `userId`: The user that created the network. `int`
- `title`: A title for the network. `text`
- `networkName` A name for the network. `text`
- `password`: The network password. The inserted data is encrypted. `text`
- `createdAt`: The date and time when the network was created. `timestamp`


### Document model _`documents`_

- `id`: A unique identifier for each document. `serial primary key`
- `userId`: The user that created the document. `int`
- `fullName`: The full name found on the document. `text`
- `issueDate`: The emission date of the document. The date must follow the format **YYYY-MM-DD**.`text`
- `expirationDate`: The expiration date of the document. The date must follow the format **YYYY-MM-DD**.`text`
- `registerNumber` : The registry number of the document. `text`
- `issuingBody`: The issuing agency of the document. `text`
- `docType`: The document'd type. Must either be '**CNH**' or '**RG**'. `enum`
- `createdAt`: The date and time when the document was created. `timestamp`



