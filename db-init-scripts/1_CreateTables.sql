CREATE TABLE "user"
(
    id          BIGSERIAL PRIMARY KEY,
    email       TEXT NOT NULL UNIQUE,
    password    TEXT NOT NULL,
    family_name TEXT NOT NULL,
    given_names TEXT NOT NULL
);

CREATE TABLE competitor
(
    id      BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES "user" (id)
);

CREATE TABLE event
(
    id BIGSERIAL PRIMARY KEY
);

CREATE TABLE event_entry
(
    competitor_id BIGINT NOT NULL REFERENCES competitor (id),
    event_id      BIGINT NOT NULL REFERENCES event (id)
);

CREATE UNIQUE INDEX "event_entry_idx" ON event_entry (competitor_id, event_id);
