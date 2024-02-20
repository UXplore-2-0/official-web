# API Design for the server

### Database Model

The database model is as follows:

- Team
  - team_id `{auto-incremented by MySQL}`
  - team_name `(unique)`
  - email `(unique)`
  - password
  - is_verfiied
  - verification_token
  - role `(either 'admin' or 'member')`
  - created_at
- Member
  - member_id `{auto-incremented by MySQL}`
  - name
  - team_id `(FORIEGN KEY referencing Team.team_id)`
  - email `(unique)`
  - university
  - team_id
  - uni_index
  - contact_no
  - beverages `('veg' or 'non-veg')`
  - added_at
- Question
  - question_id `{auto-incremented by MySQL}`
  - question
  - team_id `(FORIEGN KEY referencing Team.team_id)`
  - is_submitted
  - submission_link
  - added_at
- Notification
  - notification_id `{auto-incremented by MySQL}`
  - message_title
  - message `(html string)`
  - added_at
- QA
  - qa_id `{auto-incremented by MySQL}`
  - question `(html string)`
  - team_id `(FORIEGN KEY referencing Team.team_id)`
  - is_answered
  - answer

** Visual representation of the database model can be found in the [Database Model](https://drive.google.com/file/d/1FJT6JCHFtgrUMDyyhIXwUYB1zSkQkEZb/view?usp=sharing) **

![alt text](<MoraUXPlore-2.0-ER.drawio (2).png>)

### API Endpoints

#### 1. `/api/v1/auth`

- `POST /api/v1/auth/signup` - Register a new team
- `POST /api/v1/auth/login` - Login a team

#### 2. `/api/v1/teams` (Protected routes - <span style="color:blue">Authenticated</span>)

- `GET /api/v1/teams` - Get all the teams (<span style="color:blue">Admin Only</span>)

- `POST /api/v1/teams/:team_name/add` - Add new members to the team
- `GET /api/v1/teams/:team_name/:member_id` - Get a single member details
- `PUT /api/v1/teams/:team_name/:member_id` - Update a single member details
- `DELETE /api/v1/teams/:team_name/:member_id` - Delete a single member from the team
- `GET /api/v1/teams/:team_name` - Get a single team details

- `POST /api/v1/temas/:team_name/:member_id/beverages` - Update the beverage preference of a single member
- `PUT /api/v1/temas/:team_name/:member_id/beverages` - Update the beverage preference of a single member
- `POST /api/v1/teams/:team_name/submission` - Submit a answer for a question
- `POST /api/v1/teams/:tema_name/question` - Add a new question (<span style="color:blue">Admin Only</span>)
- `GET /api/v1/teams/:team_name/question` - Get all the questions of a team
- `GET /api/v1/temas/:team_name/submission` - Get all the submissions of a team (<span style="color:blue">Admin Only</span>)
- `POST /api/v1/teams/:team_name/qa` - Add a new question to the QA
- `GET /api/v1/teams/:team_name/qa` - Get all the questions of a team
- `POST /api/v1/teams/:team_name/qa/:qa_id/answer` - Add a new answer to a question (<span style="color:blue">Admin Only</span>)
- `GET /api/v1/teams/:team_name/qa/:qa_id/answer` - Get the answer of a question

#### 3. `/api/v1/notifications`

- `GET /api/v1/notifications` - Get all the notifications
- `POST /api/v1/notifications` - Add a new notification (<span style="color:blue">Admin Only</span>)

#### 4. `/api/v1/stat`

- `GET /api/v1/stat` - Get the statistics of the application (<span style="color:blue">Admin Only</span>)
- `GET /api/v1/stat/:team_name` - Get the statistics of a team (<span style="color:blue">Admin Only</span>)

### Here is the tree representation of the API endpoints

```
/api/v1
  /auth
    /signup (POST)
    /login (POST)
  /teams (GET)
    /add (POST)
    /:team_name (GET)
      /:member_id (GET | PUT | DELETE)
        /beverages (POST | PUT)
      /submission (POST)
      /question (POST | GET)
      /qa (POST | GET)
        /:qa_id (POST | GET)
          /answer (POST | GET)
  /notifications (GET | POST)
  /stat (GET)
    /:team_name (GET)
```

### Server folder structure

```
    - src
        - api
            - controllers
                - auth.controller.js
                - teams.controller.js
                - notifications.controller.js
                - stat.controller.js
            - middlewares
                - auth.js
                - error.js
            - routes
                -   auth.js
                -   teams.js
                -   notifications.js
                -   stat.js
            - services
            - start
                - db.js
                - logger.js
                - routes.js
                - unhandled.js
            - validations
            - models
                - Team.js
                - Member.js
                - Question.js
                - Notification.js
                - QA.js
        - config
          - config.json
        - server.js (ENTRY POINT)
    - test
    - .env
    .env.example
    - logs (log files)

```

- The `api` folder contains all the API related code.
- The `controllers` folder contains the controllers for the API endpoints. **(All the business logic goes here)**
- The `routes` folder contains the routes for the API endpoints
- The `middlewares` folder contains the middlewares for the API endpoints like **authentication, admin, error **
- The `validations` folder contains all the validation function for the api endpoints.
- The `models` folder contains the database models.
- The `config` folder contains all the configuration files.
- The `server.js` is the entry point of the server.
- The `test` folder contains all the test cases.
- The `.env` file contains all the environment variables.
- The `logs` folder contains all the log files.
- The `start` folder contains all the start files like `db.js`, `logger.js`, `routes.js`, `unhandled.js`
- The `utils` folder contains all the utility functions like `sendEmail`, `generateToken` etc.

**Refer to the `.env.example` file when create the `.env` file - `.env` file not included in the repo**

### Special Notes

- **For environment variables, contact the relevant person of the team**
- **All the routes are protected and only authenticated users can access the routes except `signup` and `login`**
- Members can only access the routes related to their team, Always check the `team_id` before accessing the routes
- Members numbering starting from 1 to 4 1 for team leader and 2,3,4 for other members

### **Please refer to the Special notes section for further details**

### Response Format

#### 1. Team

```json
{
  "team_id": "team_id",
  "team_name": "team_name",
  "email": "email",
  "created_at": "created_at",
  "team_members": [
    {
      "member_id": "member_id",
      "name": "name",
      "email": "email",
      "university": "university",
      "contact_no": "contact_no",
      "beverages": "beverages",
      "added_at": "added_at"
    },
    {
      "member_id": "member_id",
      "name": "name",
      "email": "email",
      "university": "university",
      "contact_no": "contact_no",
      "beverages": "beverages",
      "added_at": "added_at"
    }
  ]
}
```

#### 2. Member

```json
{
  "member_id": "member_id",
  "name": "name",
  "email": "email",
  "university": "university",
  "contact_no": "contact_no",
  "beverages": "beverages",
  "added_at": "added_at"
}
```

#### 3. Question

```json
{
  "question_id": "question_id",
  "question": "question",
  "team_id": "team_id",
  "is_submitted": "is_submitted",
  "submission_link": "submission_link",
  "added_at": "added_at"
}
```

#### 4. Notification

```json
{
  "notification_id": "notification_id",
  "message_title": "message_title",
  "message": "message",
  "added_at": "added_at"
}
```

#### 5. QA

```json
{
  "qa_id": "qa_id",
  "question": "question",
  "team_id": "team_id",
  "is_answered": "is_answered",
  "answer": "answer"
}
```

#### 6. Stat (**this will be updated soon**)

```json
{
  "total_teams": "total_teams",
  "total_members": "total_members",
  "total_questions": "total_questions",
  "total_submissions": "total_submissions",
  "total_notifications": "total_notifications",
  "total_qa": "total_qa"
}
```
