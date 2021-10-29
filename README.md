## bank-account-interviewing-challenge

### Intro

I was tasked to build a super simple bank account rest api server with a single account and an in-memory store using node and typescript.

This challenge is meant to be solved very quickly with minimal dependencies and should **NOT** be taken as an example on how to implement a proper service.

There's a few tests mostly covering domain. There's also curl requests at /http

### Installation instructions (on GNU/Linux)

Prerequisites: 

- Node.js version >= 12.x.x installed
- npm
- git

```
git clone
cd
npm install
npm test
npm start
```

### Concurrency considerations

Considering the single threaded eventloop in node and considering the use of a memory store no race conditions can occur as long as no processing is deferred and all operations finish on the current tick.

Consequently, http requests will be pushed until _after_ the current operation ends.

In other words as long as there are no deferred tasks such as state is not mutated in promises or timeouts there can be no stale reads on the bank account balance.

That said current architecture would prevent switching easily to a proper DB with asynchronous transactions and is pretty bad practice.


## Challenge

Develop a web service providing debit and credit operations.

### Requirements:
- Service must provide a way of querying bank account balance
- Service must accept credit and debit operations
- Service must forbid invalid operations (ie negative bank account balance)
- Must store a transaction log
- Consider concurrency operations: write ops should block other concurrent operations
- Expose service behaviour as API REST endpoints and provide documentation
- Consider HTTP methods and HTTP response codes
- Include a README with installation instructions
- Service must be implemented in NodeJS

#### It's not necessary:
- To implement authentication nor authorization: service is single account/balance only
- To provide persistency: in memory store suffices
- To use a complex framework nor a complex project structure

#### Nice to have:
- Typescript
- Tests

#### Deliverables:
- Link to github repo including an install readme.