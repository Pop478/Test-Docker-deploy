-- Создаем таблицу users
CREATE TABLE IF NOT EXISTS users (
    user_id BIGSERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    status TEXT NOT NULL
);

-- Вставляем данные
INSERT INTO users (first_name, last_name, status) 
VALUES 
('Иван', 'Иванов', 'active');
