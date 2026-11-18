/**
 * Site-wide settings. Edit this file to make the blog yours.
 */
export const SITE = {
	/** Public URL of the deployed site (no trailing slash). Used for canonical URLs, RSS and sitemap. */
	url: 'https://example.com',
	title: 'My Blog',
	description: 'Notes on software, infrastructure, and whatever else I am learning.',
	author: '2026316010009-冷文蓉',
	/** Used for <html lang> and date formatting. */
	lang: 'en',
	locale: 'en-US',
	/** Number of recent posts shown on the home page. */
	homeRecentPosts: 5,
};

/** Sidebar navigation (numbered automatically). */
export const NAV_LINKS = [
	{ href: '/', label: 'Home' },
	{ href: '/writing/', label: 'Writing' },
	{ href: '/topics/', label: 'Topics' },
	{ href: '/about/', label: 'About' },
	{ href: '/search/', label: 'Search' },
];

/**
 * Shown on the home page, About page and footer. Remove entries you don't use.
 * icon: github | mail | rss | link (see src/components/Icon.astro)
 */
export const SOCIAL_LINKS: { href: string; label: string; icon: 'github' | 'mail' | 'rss' | 'link' }[] = [
	// Example: { href: 'https://github.com/your-username', label: 'GitHub', icon: 'github' },
];
