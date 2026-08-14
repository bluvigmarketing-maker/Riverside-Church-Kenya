import type {
  SiteSettings,
  Leader,
  HistorySection,
  Program,
  ChurchEvent,
} from "./types";

/**
 * Local fallback content — mirrors supabase/seed.sql exactly. Used only when
 * Supabase isn't configured yet or a query fails, so the site is always
 * previewable (e.g. before the client's Supabase project exists) and never
 * shows a broken page. Once Supabase is live and seeded, real rows take over
 * automatically — see lib/content.ts.
 */

export const FALLBACK_SITE_SETTINGS: SiteSettings = {
  id: 0,
  tagline: "Where God's River Never Runs Dry — It Just Flows",
  motto: "Where God's River Never Runs Dry, it just flows",
  vision:
    "To be a life-giving church where the presence of God flows like a river, bringing salvation, healing, restoration, and hope to all people.",
  mission:
    "To lead people into a transforming relationship with Jesus Christ through worship, prayer, teaching of God's Word, discipleship, compassion, and the power of the Holy Spirit, so that lives, families, and communities may be healed and restored.",
  key_scripture_text:
    "Then the angel showed me the river of the water of life, as clear as crystal, flowing from the throne of God and of the Lamb... and the leaves of the tree were for the healing of the nations.",
  key_scripture_ref: "Revelation 22:1-3",
  address: "Marura, Eldoret, Kenya",
  phone: null,
  email: null,
  service_times: [],
  social_links: [],
};

export const FALLBACK_LEADERS: Leader[] = [
  {
    id: 1,
    name: "Pastor Borness Chepchirchir Biwott",
    role_title: "Senior Pastor",
    quote: "Step into the river of God's grace and experience His life-changing power.",
    bio: `Pastor Borness Chepchirchir Biwott is the Senior Pastor of River Church Eldoret. She is a devoted servant of God whose life reflects deep faith, humility, compassion, and an unwavering commitment to the Kingdom of God.

Born and raised in Chepterit Village, Nandi County, Kenya, in a humble family, Pastor Borness learned the values of hard work, respect, integrity, and the fear of the Lord from a young age. From her early years, she demonstrated a deep love for God and a gentle, prayerful disposition. Growing up in the village, she assisted her parents with household chores and faithfully cared for her family's cattle, developing virtues of diligence, responsibility, endurance, and humility.

After completing secondary school, Pastor Borness pursued studies in Logistics and Management at Machakos University. Her passion for spiritual service continued to burn brightly. In 2009, she married the love of her life, Pastor Ezra Biwott. United by faith and a common vision, they have served together in ministry ever since, and together founded River Church Eldoret.

Today, Pastor Borness is a loving wife, mother, cherished leader, and compassionate shepherd to hundreds of believers. Known for her warm smile, wisdom, prayerfulness, and approachable nature, her ministry is marked by a deep dependence on the Holy Spirit and a passion for seeing lives, families, and communities restored by Jesus Christ.`,
    photo_url: "/images/leadership/pastor-borness.jpg",
    hometown: "Chepterit Village, Nandi County",
    education: "Machakos University (Logistics and Management)",
    ordination_info: null,
    attributes: ["Prayerful", "Visionary", "Compassionate", "Humble", "Gracious", "Disciplined"],
    sort_order: 1,
  },
  {
    id: 2,
    name: "Pastor Ezra Kipkogei Biwott",
    role_title: "Associate Pastor",
    quote:
      "Known for his powerful prayer life, humility, and gentle spirit, Pastor Ezra faithfully balances ministry with farming, demonstrating that excellence in both spiritual and practical life brings glory to God.",
    bio: `Pastor Ezra Kipkogei Biwott serves faithfully as Associate Pastor at River Church Eldoret alongside his wife, Senior Pastor Borness. He is a devoted minister of the Gospel, a loving family man, and a successful large-scale farmer.

Born in Sogomo Village, Uasin Gishu County, Kenya, Pastor Ezra grew up in a humble Christian family. As the youngest child, he was known for his cheerful nature, respectfulness, and strong work ethic. Helping his father on the farm ignited a lifelong passion for agriculture, particularly maize and vegetable farming, while instilling in him values of perseverance, patience, and stewardship.

After completing high school, Pastor Ezra studied Business Administration at Good Samaritan College of Business in Nakuru. Upon graduating, he applied his knowledge to agriculture, growing into a highly successful large-scale farmer while maintaining uncompromising integrity.

In 2018, Pastor Ezra answered God's call to step into ministry alongside his wife. His unwavering dedication and spiritual growth led to his official ordination as a pastor in 2023. Known for his powerful prayer life, humility, and gentle spirit, Pastor Ezra faithfully balances ministry with farming, demonstrating that excellence in both spiritual and practical life brings glory to God.`,
    photo_url: "/images/leadership/pastor-ezra.jpg",
    hometown: "Sogomo Village, Uasin Gishu County",
    education: "Good Samaritan College of Business, Nakuru (Business Administration)",
    ordination_info: "Ordained Pastor, 2023",
    attributes: [
      "Servant-Hearted",
      "Faithful Steward",
      "Fervent Intercessor",
      "Diligent",
      "Generous",
      "Integrity",
    ],
    sort_order: 2,
  },
];

export const FALLBACK_HISTORY_SECTIONS: HistorySection[] = [
  {
    id: 1,
    heading: "A Divine Vision Given by God",
    subheading: null,
    body: `The foundation of River Church Eldoret rests upon a remarkable divine revelation given to Senior Pastor Borness Chepchirchir Biwott.

In a dream, Pastor Borness saw a river of clear, crystal-like water flowing, with reeds growing along its banks. She witnessed people stepping into the flowing water and receiving miraculous healing — echoing the river of life described in Revelation 22:1-3, where the Apostle John writes: "Then the angel showed me the river of the water of life, as clear as crystal, flowing from the throne of God and of the Lamb... and the leaves of the tree are for the healing of the nations."

In that same vision, God revealed a specific location: Marura — the very place that later became the home of River Church Eldoret, confirming God's guidance and faithfulness.`,
    image_url: null,
    sort_order: 1,
  },
  {
    id: 2,
    heading: "Faithful Beginnings",
    subheading: "2018–2020",
    body: `Long before the church was established, Pastor Borness had dedicated herself to seeking the Lord through prayer and fasting.

Beginning in 2018, she spent many days praying both at home and on prayer mountains, earnestly asking God to reveal His purpose and direction for her life because she knew she had been called to serve Him. As she faithfully sought God, she began praying for people in her home, and many experienced healing and the touch of God. These miracles strengthened her conviction that God was preparing her for a greater ministry.

In 2020, while praying together with her husband, Pastor Ezra Biwott, Pastor Borness heard the voice of the Lord instructing them to begin a church. In obedience to God's call, they searched for a place to rent and officially started the ministry with only five members.`,
    image_url: null,
    sort_order: 2,
  },
  {
    id: 3,
    heading: "Growth and Expansion",
    subheading: "2020–Present",
    body: `From that humble beginning, God has continually added to the church. Through His grace and power, River Church Eldoret has grown steadily and today has a congregation of approximately 700 members.

In 2025, the ministry was blessed to acquire land at the exact location where Pastor Borness had seen the river flowing in her vision. Temporary tents were erected to serve as the place of worship while plans for permanent development began.

Earlier this year, the church completed construction of a Sunday School facility that now serves up to 300 children, providing them a safe place to learn the Word of God and grow in their faith.`,
    image_url: null,
    sort_order: 3,
  },
  {
    id: 4,
    heading: "Looking Forward to the Future",
    subheading: null,
    body: `Although the congregation continues to worship under tents, the vision remains alive. River Church Eldoret is trusting God to build a magnificent sanctuary dedicated to His glory before the end of this year. This sanctuary will provide a permanent place of worship, discipleship, prayer, and outreach for generations to come.

River Church Eldoret stands as a testimony that when God gives a vision, He also provides the grace, the people, and the resources to bring it to fulfillment. The ministry remains committed to proclaiming the Gospel of Jesus Christ, raising faithful disciples, nurturing children, healing the broken, and demonstrating the transforming power of the Holy Spirit to all who come.`,
    image_url: null,
    sort_order: 4,
  },
];

export const FALLBACK_PROGRAMS: Program[] = [
  {
    id: 1,
    title: "Spiritual Renewal & Revival",
    icon_name: "flame",
    description:
      "Experiencing the fresh, continuous flow of the Holy Spirit daily in our lives and corporate worship.",
    tag_label: "Holy Spirit Flow",
    sort_order: 1,
  },
  {
    id: 2,
    title: "God-Centered Worship",
    icon_name: "music",
    description:
      "Exalting the Lord in holiness, spirit, and truth with reverent hearts and passionate praise.",
    tag_label: "Holiness & Truth",
    sort_order: 2,
  },
  {
    id: 3,
    title: "Healing & Restoration",
    icon_name: "heart-pulse",
    description:
      "Bringing Christ's divine compassion and miraculous power to broken hearts, families, and nations.",
    tag_label: "Compassion & Healing",
    sort_order: 3,
  },
  {
    id: 4,
    title: "Freedom in Christ",
    icon_name: "unlock",
    description:
      "Walking in total deliverance, hope, and freedom from every spiritual curse through the blood of Jesus.",
    tag_label: "Deliverance & Hope",
    sort_order: 4,
  },
  {
    id: 5,
    title: "Discipleship & Service",
    icon_name: "users",
    description:
      "Raising faithful, grounded believers committed to Kingdom ministry and active community service.",
    tag_label: "Kingdom Ministry",
    sort_order: 5,
  },
];

export const FALLBACK_EVENTS: ChurchEvent[] = [
  {
    id: 1,
    title: "Sanctuary Building Fund Sunday (sample — replace before launch)",
    slug: "sanctuary-building-fund-sunday",
    description:
      "Join us for a special service dedicated to the vision of our new permanent sanctuary in Marura.",
    starts_at: "2026-09-06T10:00:00+03:00",
    location: "Marura, Eldoret",
    image_url: null,
    is_featured: true,
    donation_enabled: true,
    created_at: "2026-08-14T00:00:00+03:00",
  },
];
