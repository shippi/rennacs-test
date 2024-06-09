CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone_number varchar(255) NOT NULL,
    created_at DATE NOT NULL,

    --check constraints for valid email, address, and phone number
    CONSTRAINT proper_email CHECK (email ~ '^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$' ),
    CONSTRAINT proper_address CHECK (address ~ '^[a-zA-Z0-9/ ]*, [a-zA-Z ]*, [a-zA-Z ]*, [0-9]{4}$'),
    CONSTRAINT phone_number CHECK (phone_number ~ '^\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$')
)