const envConfig = {
	dev: {
		env: "dev",
		www: [],
		apiPath: "https://xcodeapi.bld365.com" // 测试环境
	},
	pre: {
		env: "pre",
		www: [],
		apiPath: ""
	},
	prod: {
		env: "prod",
		www: [],
		apiPath: ""
	}
};

export const ENV_CONFIG = getEnvConfig();

export const STORAGE_TOKEN_KEY = "login-storage-token-key";

function getEnvConfig() {
	const origin = window.location.origin || "";
	const config = Object.keys(envConfig).find((key) => {
		const c = envConfig[key];
		return c.www.indexOf(origin) > -1;
	});
	return config || envConfig.dev;
}
