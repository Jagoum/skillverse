CREATE TABLE
    IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL DEFAULT 'user'
    );

-- Insert default admin user (password is hashed for 'VeryStrongPassword678')
-- Note: Replace the password hash below with an actual bcrypt hash of the password
INSERT INTO
    users (username, email, password, role)
VALUES
    (
        'admin',
        'admin@user.com',
        '$2b$10$example.hash.here',
        'admin'
    ) ON CONFLICT (email) DO NOTHING;