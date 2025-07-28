FROM python:3.11-bookworm AS builder

RUN apt-get update && apt-get install -y --no-install-recommends curl

RUN curl -LsS 'https://astral.sh/uv/install.sh' | sh
ENV PATH="/root/.local/bin:$PATH"

ENV UV_LINK_MODE=copy

WORKDIR /app

RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    uv sync --frozen --no-install-project --no-dev

ENV PATH="/app/.venv/bin:$PATH"

FROM python:3.11-slim-bookworm AS production

WORKDIR /app

COPY --from=builder /app/.venv .venv
COPY src/ ./src

ENV PATH="/app/.venv/bin:$PATH"