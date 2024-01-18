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
    user_id BIGINT NOT NULL REFERENCES "user" (id),
    nationality TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    emergency_contact TEXT 
);

CREATE TABLE organiser (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES "user" (id)
);


CREATE TABLE venue (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    contact_email TEXT NOT NULL
);

CREATE TABLE event
(
    id BIGSERIAL PRIMARY KEY,
    venue_id BIGINT NOT  NULL REFERENCES "venue" (id),
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    country TEXT NOT NULL,
    stars INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    contact_email TEXT NOT NULL
);


CREATE TABLE event_entry
(
    competitor_id BIGINT NOT NULL REFERENCES competitor (id),
    event_id      BIGINT NOT NULL REFERENCES event (id)
);

CREATE UNIQUE INDEX "event_entry_idx" ON event_entry (competitor_id, event_id);

CREATE TABLE event_organiser (
    event_id BIGINT NOT NULL REFERENCES event (id),
    organiser_id BIGINT NOT NULL REFERENCES organiser (id)
);

CREATE UNIQUE INDEX "event_organiser_idx" ON event_organiser (organiser_id, event_id);

