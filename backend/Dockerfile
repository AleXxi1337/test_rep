FROM python:3.11-buster AS builder

RUN rm -f /etc/apt/sources.list.d/ubuntu.sources && \
    echo "deb http://archive.ubuntu.com/ubuntu noble main universe" > /etc/apt/sources.list && \
    echo "deb http://security.ubuntu.com/ubuntu noble-security main universe" >> /etc/apt/sources.list && \
    echo "deb http://archive.ubuntu.com/ubuntu noble-updates main universe" >> /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends curl && \
    rm -rf /var/lib/apt/lists/*

RUN curl -LsS 'https://astral.sh/uv/install.sh' | sh
ENV PATH="/root/.local/bin:$PATH"

ENV UV_LINK_MODE=copy

WORKDIR /app

RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    uv sync --frozen --no-install-project --no-dev

ENV PATH="/app/.venv/bin:$PATH"

FROM python:3.11-slim-buster AS production

WORKDIR /app

COPY --from=builder /app/.venv .venv
COPY src/ ./src

ENV PATH="/app/.venv/bin:$PATH"