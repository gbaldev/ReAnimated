import { atom, useAtom } from 'jotai';

const InitialNotes = [
  "Remember to buy groceries on the way back home from work. Don't forget the milk and eggs.",
  'Research new investment opportunities in the tech sector. Look into emerging startups and trends.',
  'Practice guitar chords for at least 30 minutes every day. Focus on mastering barre chords.',
  'Draft outline for upcoming presentation on climate change. Incorporate recent data and case studies.',
  'Plan weekend getaway with friends. Consider options for hiking or beach destinations.',
  'Schedule dentist appointment for annual check-up. Call to confirm insurance coverage beforehand.',
  "Start reading 'The Great Gatsby' for book club meeting next month. Take notes on themes and characters.",
  'Review Spanish vocabulary flashcards for upcoming language proficiency test. Focus on verbs and conjugations.',
  'Attend networking event next Thursday. Prepare elevator pitch and bring plenty of business cards.',
  'Begin home renovation project by researching contractors and obtaining quotes. Focus on kitchen upgrades.',
  'Volunteer at local animal shelter this weekend. Sign up for morning shift to help with feeding and cleaning.',
  'Set SMART goals for personal fitness. Aim to run a half marathon by the end of the year.',
  'Experiment with new recipes for meal prep. Incorporate more plant-based options for a healthier diet.',
  'Update resume with recent achievements and skills. Tailor it for specific job applications.',
  'Plan monthly budget and track expenses using spreadsheet or budgeting app. Allocate funds for savings and investments.',
  'Start learning basic coding skills online. Explore HTML, CSS, and JavaScript tutorials.',
  'Organize closet and donate unused clothing items to charity. Declutter and create more space.',
  'Research mindfulness and meditation techniques for stress relief. Practice deep breathing exercises daily.',
  'Sign up for photography class to improve skills. Explore different techniques and compositions.',
  'Create a gratitude journal to reflect on positive moments each day. Write down three things to be grateful for.',
].map((note, index) => ({
  id: index.toString(),
  title: note,
}));

export type NoteType = (typeof InitialNotes)[number];

export const NotesAtom = atom(InitialNotes);

export const useNotes = () => {
  return useAtom(NotesAtom);
};
