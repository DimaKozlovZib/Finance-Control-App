interface ImportMetaEnv {
	readonly VITE_GOOGLE_OAUTH_ID: string
	readonly VITE_API_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
