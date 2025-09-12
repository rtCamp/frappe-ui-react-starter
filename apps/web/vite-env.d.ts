/// <reference types="vite/client" />

/**
 * Interface ImportMetaEnv.
 */
interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_FEATURE_FLAG: string;
}

/**
 * Interface ImportMeta.
 */
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
