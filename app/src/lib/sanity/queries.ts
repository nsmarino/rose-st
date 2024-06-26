import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`;

export const postsQuery = groq`*[_type == "post"]{
	...,
	category->,
	subcategories[]->
} | order(title asc)`;
export const catQuery = groq`*[_type == "category"] | order(_createdAt desc)`;
export const subcatQuery = groq`*[_type == "subcategory"] | order(_createdAt desc)`;
export const settingsQuery = groq`*[_type == "settings"][0]`;

export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}
