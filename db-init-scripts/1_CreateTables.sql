
CREATE TABLE "user" (
    id BIGSERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    family_name TEXT NOT NULL,
    given_names TEXT NOT NULL
);
