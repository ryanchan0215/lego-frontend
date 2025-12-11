--
-- PostgreSQL database dump
--

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

-- Started on 2025-12-10 22:58:46

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_table_access_method = heap;

--
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    post_id integer,
    user_id integer,
    content text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

--
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;

--
--

CREATE TABLE public.conversations (
    id integer NOT NULL,
    post_id integer,
    buyer_id integer,
    seller_id integer,
    last_message_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

--
--

CREATE SEQUENCE public.conversations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
--

ALTER SEQUENCE public.conversations_id_seq OWNED BY public.conversations.id;

--
--

CREATE TABLE public.likes (
    id integer NOT NULL,
    post_id integer,
    user_id integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

--
--

CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;

--
--

CREATE TABLE public.messages (
    id integer NOT NULL,
    conversation_id integer,
    sender_id integer,
    content text NOT NULL,
    is_read boolean DEFAULT false,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

--
--

CREATE SEQUENCE public.messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
--

ALTER SEQUENCE public.messages_id_seq OWNED BY public.messages.id;

--
--

CREATE TABLE public.post_items (
    id integer NOT NULL,
    post_id integer,
    part_number character varying(50) NOT NULL,
    part_name character varying(255),
    part_image_url text,
    color character varying(50) NOT NULL,
    quantity integer NOT NULL,
    price_per_unit numeric(10,2) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    condition character varying(50),
    CONSTRAINT post_items_price_per_unit_check CHECK ((price_per_unit >= (0)::numeric)),
    CONSTRAINT post_items_quantity_check CHECK ((quantity > 0))
);

--
--

CREATE SEQUENCE public.post_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
--

ALTER SEQUENCE public.post_items_id_seq OWNED BY public.post_items.id;

--
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    user_id integer,
    type character varying(10) NOT NULL,
    contact_info text,
    notes text,
    status character varying(20) DEFAULT 'available'::character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT posts_status_check CHECK (((status)::text = ANY ((ARRAY['available'::character varying, 'sold'::character varying, 'closed'::character varying])::text[]))),
    CONSTRAINT posts_type_check CHECK (((type)::text = ANY ((ARRAY['sell'::character varying, 'buy'::character varying])::text[])))
);

--
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;

--
--

CREATE TABLE public.sms_verifications (
    phone character varying(20) NOT NULL,
    code character varying(6) NOT NULL,
    expires_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

--
--

CREATE TABLE public.token_transactions (
    id integer NOT NULL,
    user_id integer,
    action character varying(50) NOT NULL,
    tokens_changed integer NOT NULL,
    balance_after integer NOT NULL,
    description text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

--
--

CREATE SEQUENCE public.token_transactions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
--

ALTER SEQUENCE public.token_transactions_id_seq OWNED BY public.token_transactions.id;

--
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    phone character varying(20) NOT NULL,
    password_hash character varying(255) NOT NULL,
    tokens integer DEFAULT 3,
    total_tokens_used integer DEFAULT 0,
    is_admin boolean DEFAULT false,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    last_login timestamp without time zone
);

--
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;

--
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);

--
--

ALTER TABLE ONLY public.conversations ALTER COLUMN id SET DEFAULT nextval('public.conversations_id_seq'::regclass);

--
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);

--
--

ALTER TABLE ONLY public.messages ALTER COLUMN id SET DEFAULT nextval('public.messages_id_seq'::regclass);

--
--

ALTER TABLE ONLY public.post_items ALTER COLUMN id SET DEFAULT nextval('public.post_items_id_seq'::regclass);

--
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);

--
--

ALTER TABLE ONLY public.token_transactions ALTER COLUMN id SET DEFAULT nextval('public.token_transactions_id_seq'::regclass);

--
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);

--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.comments (id, post_id, user_id, content, created_at) FROM stdin;
1	5	1	這是我的第一條留言！	2025-12-03 17:41:36.271878
3	5	2	可唔可以平D呀	2025-12-03 17:53:40.928588
4	6	2	試下姐	2025-12-03 17:53:50.503494

--
-- Data for Name: conversations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.conversations (id, post_id, buyer_id, seller_id, last_message_at, created_at) FROM stdin;
1	6	1	2	2025-12-03 23:44:34.907785	2025-12-03 23:31:13.934858
3	6	3	2	2025-12-04 00:24:03.60543	2025-12-04 00:24:03.593426
2	5	2	1	2025-12-07 20:03:58.050084	2025-12-03 23:53:14.22813

--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.likes (id, post_id, user_id, created_at) FROM stdin;
6	6	2	2025-12-06 21:06:12.002571
12	5	2	2025-12-08 23:47:46.608415
13	17	2	2025-12-09 00:20:01.230761
14	13	1	2025-12-09 00:21:43.383545
16	5	1	2025-12-09 20:36:23.308731
17	17	1	2025-12-09 20:36:26.193492
18	18	1	2025-12-09 23:48:42.616142

--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.messages (id, conversation_id, sender_id, content, is_read, created_at) FROM stdin;
1	1	1	HI	t	2025-12-03 23:44:34.905011
3	3	3	HI 仲有冇貨呀	t	2025-12-04 00:24:03.603907
2	2	2	hi 想問下仲有冇貨	t	2025-12-04 00:14:54.563922
4	2	1	你要邊一樣	t	2025-12-07 20:03:58.048798

--
-- Data for Name: post_items; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.post_items (id, post_id, part_number, part_name, part_image_url, color, quantity, price_per_unit, created_at, condition) FROM stdin;
6	6	3002	\N	\N	紅色	100	12.00	2025-12-03 16:47:23.08936	未提供
7	7	3003	\N	\N	紅色	200	1.00	2025-12-03 16:47:34.001734	未提供
13	13	3702	\N	\N	紅色	100	1.00	2025-12-08 23:33:00.591871	9成新
14	13	222	\N	\N	粉紅色	100	1.00	2025-12-08 23:33:00.591871	全新
15	13	1212	\N	\N	粉紅色	100	1.20	2025-12-08 23:33:00.591871	9成新
16	13	1111	\N	\N	粉紅色	100	1.00	2025-12-08 23:33:00.591871	全新
17	14	3002	\N	\N	紅色	100	1.00	2025-12-08 23:49:06.815827	全新
18	15	2223	\N	\N	紅色	1	0.01	2025-12-08 23:49:15.085157	全新
19	16	21	\N	\N	藍色	11	11.00	2025-12-08 23:49:24.572652	9成新
20	17	120	\N	\N	黑色	1	21.00	2025-12-09 00:12:23.64454	全新
21	17	120	\N	\N	啡色	1	12.00	2025-12-09 00:12:23.64454	9成新
5	5	3001	\N	\N	藍色	120	12.00	2025-12-03 16:11:27.587857	全新
22	18	1332	\N	\N	紫色	121	121.00	2025-12-09 00:25:10.544579	9成新
23	20	2231	\N	\N	dsdsd	21	1.00	2025-12-09 23:51:42.914	dsdsds

--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.posts (id, user_id, type, contact_info, notes, status, created_at, updated_at) FROM stdin;
6	2	sell	\N	\N	available	2025-12-03 16:47:23.08936	2025-12-03 16:47:23.08936
7	2	buy	\N	\N	available	2025-12-03 16:47:34.001734	2025-12-03 16:47:34.001734
13	2	sell	\N	\N	available	2025-12-08 23:33:00.591871	2025-12-08 23:33:00.591871
14	2	sell	\N	\N	available	2025-12-08 23:49:06.815827	2025-12-08 23:49:06.815827
15	2	sell	\N	\N	available	2025-12-08 23:49:15.085157	2025-12-08 23:49:15.085157
16	2	sell	\N	\N	available	2025-12-08 23:49:24.572652	2025-12-08 23:49:24.572652
17	2	sell	\N	\N	available	2025-12-09 00:12:23.64454	2025-12-09 00:12:23.64454
5	1	sell	\N	\N	available	2025-12-03 16:11:27.587857	2025-12-09 00:24:26.766329
18	1	sell	\N	\N	available	2025-12-09 00:25:10.544579	2025-12-09 00:25:10.544579
20	1	sell	\N	\N	available	2025-12-09 23:51:42.914	2025-12-09 23:51:42.914

--
-- Data for Name: sms_verifications; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.sms_verifications (phone, code, expires_at, created_at) FROM stdin;

--
-- Data for Name: token_transactions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.token_transactions (id, user_id, action, tokens_changed, balance_after, description, created_at) FROM stdin;
5	1	post_create	-1	2	發佈交易	2025-12-03 16:11:27.587857
6	2	post_create	-1	2	發佈交易	2025-12-03 16:47:23.08936
7	2	post_create	-1	1	發佈交易	2025-12-03 16:47:34.001734
8	2	post_create	-1	0	發佈交易	2025-12-04 00:26:03.393443
9	3	admin_add	10	13	管理員增加 10 次發佈機會	2025-12-05 15:47:40.52297
10	1	admin_add	20	22	管理員增加 20 次發佈機會	2025-12-05 15:47:46.161728
11	2	admin_add	999	999	管理員增加 999 次發佈機會	2025-12-05 15:48:07.655944
12	2	post_edit	-1	998	編輯貼文 #8	2025-12-05 15:52:57.147151
13	2	post_create	-1	997	發佈交易	2025-12-06 21:06:50.394967
14	1	admin_add	20	42	管理員增加 20 次發佈機會	2025-12-07 20:03:27.247388
15	2	post_create	-1	996	發佈交易	2025-12-07 21:18:32.326717
16	2	post_create	-1	995	發佈交易	2025-12-07 21:44:11.872656
17	2	post_create	-1	994	發佈交易	2025-12-07 22:02:59.126527
18	2	post_create	-1	993	發佈交易	2025-12-08 23:33:00.591871
19	2	post_create	-1	992	發佈交易	2025-12-08 23:49:06.815827
20	2	post_create	-1	991	發佈交易	2025-12-08 23:49:15.085157
21	2	post_create	-1	990	發佈交易	2025-12-08 23:49:24.572652
22	2	post_create	-1	989	發佈交易	2025-12-09 00:12:23.64454
23	1	ad_watched	1	43	觀看廣告賺取 1 次發佈機會	2025-12-09 00:23:30.256843
24	1	post_edit	-1	42	編輯貼文 #5	2025-12-09 00:24:26.766329
25	1	post_create	-1	41	發佈交易	2025-12-09 00:25:10.544579
26	1	ad_watched	1	42	觀看廣告賺取 1 次發佈機會	2025-12-09 20:26:04.243986
27	1	post_create	-1	41	發佈交易	2025-12-09 23:51:42.914

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, username, email, phone, password_hash, tokens, total_tokens_used, is_admin, created_at, last_login) FROM stdin;
2	ryanchanchan	ryanchan@gmail.com	12332112	$2b$10$StF8zjUD89X57snnHxjXgObhImpw6qR6udIp2Xs8X9qcbwXonsz/C	989	13	t	2025-12-03 16:47:04.544001	2025-12-09 22:53:56.312171
1	hollylawlaw	hollylaw@gmail.com	52121212	$2b$10$lfj5bVRyqx9HWLGAzzufMuMLYqkoRSldRMTRAFRbJgD3xTxQgwzKy	41	4	f	2025-12-03 16:07:55.160827	2025-12-09 23:37:06.044821
3	holly1	holly@gamil.com	12321231	$2b$10$OgRylE.a3s0AAyqidLwOxefpkRwH5RZz/s9EPiMBAo9GPKOy8OSPy	13	0	f	2025-12-04 00:23:40.075188	\N

--
--

SELECT pg_catalog.setval('public.comments_id_seq', 4, true);

--
--

SELECT pg_catalog.setval('public.conversations_id_seq', 3, true);

--
--

SELECT pg_catalog.setval('public.likes_id_seq', 18, true);

--
--

SELECT pg_catalog.setval('public.messages_id_seq', 4, true);

--
--

SELECT pg_catalog.setval('public.post_items_id_seq', 23, true);

--
--

SELECT pg_catalog.setval('public.posts_id_seq', 20, true);

--
--

SELECT pg_catalog.setval('public.token_transactions_id_seq', 27, true);

--
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);

--
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);

--
--

ALTER TABLE ONLY public.conversations
    ADD CONSTRAINT conversations_pkey PRIMARY KEY (id);

--
--

ALTER TABLE ONLY public.conversations
    ADD CONSTRAINT conversations_post_id_buyer_id_seller_id_key UNIQUE (post_id, buyer_id, seller_id);

--
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);

--
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_post_id_user_id_key UNIQUE (post_id, user_id);

--
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);

--
--

ALTER TABLE ONLY public.post_items
    ADD CONSTRAINT post_items_pkey PRIMARY KEY (id);

--
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);

--
--

ALTER TABLE ONLY public.sms_verifications
    ADD CONSTRAINT sms_verifications_pkey PRIMARY KEY (phone);

--
--

ALTER TABLE ONLY public.token_transactions
    ADD CONSTRAINT token_transactions_pkey PRIMARY KEY (id);

--
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);

--
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_phone_key UNIQUE (phone);

--
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);

--
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);

--
--

CREATE INDEX idx_comments_post_id ON public.comments USING btree (post_id);

--
--

CREATE INDEX idx_conversations_buyer ON public.conversations USING btree (buyer_id);

--
--

CREATE INDEX idx_conversations_post ON public.conversations USING btree (post_id);

--
--

CREATE INDEX idx_conversations_seller ON public.conversations USING btree (seller_id);

--
--

CREATE INDEX idx_likes_post_id ON public.likes USING btree (post_id);

--
--

CREATE INDEX idx_likes_user_id ON public.likes USING btree (user_id);

--
--

CREATE INDEX idx_messages_conversation ON public.messages USING btree (conversation_id);

--
--

CREATE INDEX idx_messages_created ON public.messages USING btree (created_at);

--
--

CREATE INDEX idx_messages_unread ON public.messages USING btree (conversation_id, is_read);

--
--

CREATE INDEX idx_post_items_part_number ON public.post_items USING btree (part_number);

--
--

CREATE INDEX idx_post_items_post_id ON public.post_items USING btree (post_id);

--
--

CREATE INDEX idx_posts_created_at ON public.posts USING btree (created_at DESC);

--
--

CREATE INDEX idx_posts_status ON public.posts USING btree (status);

--
--

CREATE INDEX idx_posts_type ON public.posts USING btree (type);

--
--

CREATE INDEX idx_posts_user_id ON public.posts USING btree (user_id);

--
--

CREATE INDEX idx_token_transactions_user_id ON public.token_transactions USING btree (user_id);

--
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON DELETE CASCADE;

--
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;

--
--

ALTER TABLE ONLY public.conversations
    ADD CONSTRAINT conversations_buyer_id_fkey FOREIGN KEY (buyer_id) REFERENCES public.users(id) ON DELETE CASCADE;

--
--

ALTER TABLE ONLY public.conversations
    ADD CONSTRAINT conversations_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON DELETE CASCADE;

--
--

ALTER TABLE ONLY public.conversations
    ADD CONSTRAINT conversations_seller_id_fkey FOREIGN KEY (seller_id) REFERENCES public.users(id) ON DELETE CASCADE;

--
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON DELETE CASCADE;

--
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;

--
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_conversation_id_fkey FOREIGN KEY (conversation_id) REFERENCES public.conversations(id) ON DELETE CASCADE;

--
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_sender_id_fkey FOREIGN KEY (sender_id) REFERENCES public.users(id) ON DELETE CASCADE;

--
--

ALTER TABLE ONLY public.post_items
    ADD CONSTRAINT post_items_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON DELETE CASCADE;

--
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;

--
--

ALTER TABLE ONLY public.token_transactions
    ADD CONSTRAINT token_transactions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;

-- Completed on 2025-12-10 22:58:47

--
-- PostgreSQL database dump complete
--

