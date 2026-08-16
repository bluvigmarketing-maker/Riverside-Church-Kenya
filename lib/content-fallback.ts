import type {
  SiteSettings,
  Leader,
  HistorySection,
  Program,
  ChurchEvent,
  Organization,
  OrganizationSection,
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

/**
 * Organizations — affiliated ministries/CBOs that sit under the church
 * (e.g. Women of the Living Waters). Each has its own dedicated page at
 * /organizations/[slug], with a `part`-grouped list of content sections.
 */
export const FALLBACK_ORGANIZATIONS: Organization[] = [
  {
    id: 1,
    slug: "women-of-the-living-waters",
    name: "Women of the Living Waters",
    short_description:
      "A women's ministry (CBO) under River Church Eldoret raising spiritually mature, empowered, and influential women who transform families, churches, communities, and nations.",
    motto: "Flowing in God's Love, Transforming Lives and Nations.",
    theme_scripture_text:
      "Whoever believes in me, as Scripture has said, rivers of living water will flow from within them.",
    theme_scripture_ref: "John 7:38",
    vision:
      "To raise spiritually mature, empowered, compassionate, and influential women who transform families, churches, communities, and nations through the love and power of Jesus Christ.",
    mission:
      "To equip women spiritually, socially, economically, and emotionally so they can become godly leaders, agents of change, and a source of hope in their communities and around the world.",
    logo_url: "/images/organizations/women-of-the-living-waters/logo.jpg",
    hero_image_url: null,
    sort_order: 1,
  },
];

export const FALLBACK_ORGANIZATION_SECTIONS: OrganizationSection[] = [
  // ============================================================
  // Part: Church & Community
  // ============================================================
  {
    id: 1,
    organization_id: 1,
    part: "Church & Community",
    heading: "Objectives Within the Church and Community",
    scripture_text:
      "You are the light of the world... let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
    scripture_ref: "Matthew 5:14–16",
    body: "The ministry of Women of the Living Waters exists to nurture women into spiritually mature disciples of Christ who serve faithfully within the church and become instruments of transformation in their homes, workplaces, and communities. These objectives provide a framework for strengthening the church while extending Christ's love beyond its walls.",
    image_url: null,
    sort_order: 1,
  },
  {
    id: 2,
    organization_id: 1,
    part: "Church & Community",
    heading: "1. Spiritual Growth",
    scripture_text: null,
    scripture_ref: null,
    body: `The highest priority of Women of the Living Waters is to help every woman grow in her personal relationship with Jesus Christ. Spiritual maturity equips women to live lives that glorify God and positively influence their families and communities.

**Objectives**

- Organize regular prayer meetings, fasting programs, Bible study fellowships, worship services, and spiritual retreats.
- Teach biblical doctrine and encourage consistent study of God's Word.
- Mentor women through discipleship programs that strengthen faith and Christian character.
- Raise committed intercessors who pray faithfully for the church, families, communities, and nations.
- Equip women to discover and use their spiritual gifts in ministry.
- Encourage holy living, obedience to God's Word, and dependence on the Holy Spirit.
- Promote Christ-centered marriages and families built on biblical values.
- Encourage daily personal devotion, worship, and evangelism.

**Expected Impact**

- Spiritually mature women who reflect the character of Christ.
- Strong prayer culture within the church.
- Increased participation of women in ministry.
- Strong Christian families rooted in biblical truth.
- A spiritually vibrant church that influences society for Christ.`,
    image_url: null,
    sort_order: 2,
  },
  {
    id: 3,
    organization_id: 1,
    part: "Church & Community",
    heading: "2. Leadership Development",
    scripture_text: null,
    scripture_ref: null,
    body: `Women of the Living Waters seeks to raise confident, servant-hearted women leaders who faithfully serve God in the church and society.

**Objectives**

- Identify women with leadership potential and provide mentorship.
- Conduct leadership training based on biblical principles.
- Equip women with skills in communication, administration, conflict resolution, teamwork, and servant leadership.
- Train women for ministry roles such as Bible teachers, worship leaders, mentors, evangelists, counselors, and ministry coordinators.
- Encourage women to actively serve in church departments including worship, hospitality, children's ministry, youth ministry, missions, administration, media, and outreach.
- Build confidence for women to lead with humility, wisdom, and integrity.

**Expected Impact**

- Strong and capable women leaders.
- Effective ministry teams within the church.
- Greater participation of women in church leadership.
- A new generation of women equipped to mentor others.`,
    image_url: null,
    sort_order: 3,
  },
  {
    id: 4,
    organization_id: 1,
    part: "Church & Community",
    heading: "3. Family Strengthening",
    scripture_text: null,
    scripture_ref: null,
    body: `Healthy families are the foundation of healthy churches and communities. Women of the Living Waters is committed to strengthening families according to biblical principles.

**Objectives**

- Organize marriage enrichment seminars and couples' retreats.
- Provide parenting training rooted in biblical values.
- Support single mothers, widows, young women, and women facing difficult life circumstances.
- Offer family counseling, mentorship, and prayer support.
- Encourage healthy communication, forgiveness, respect, and love within families.
- Teach biblical principles on marriage, parenting, stewardship, and family life.
- Mentor young women to prepare them for responsible adulthood, marriage, and Christian service.

**Expected Impact**

- Stronger marriages.
- Confident and godly parents.
- Emotionally healthy families.
- Reduced family conflicts.
- Children raised in Christian values.`,
    image_url: null,
    sort_order: 4,
  },
  {
    id: 5,
    organization_id: 1,
    part: "Church & Community",
    heading: "4. Women's Welfare",
    scripture_text: null,
    scripture_ref: null,
    body: `The ministry is committed to demonstrating Christ's compassion by caring for women during times of need, celebrating with them in times of joy, and walking alongside them through life's challenges.

**Objectives**

- Visit sick members in hospitals and homes.
- Pray for and support women facing illness or personal difficulties.
- Comfort bereaved families through visits, counseling, prayer, and practical assistance.
- Support widows, vulnerable women, elderly women, and women living with disabilities.
- Organize welfare funds to assist members during emergencies.
- Provide counseling and emotional support through trained mentors and church leaders.
- Celebrate important milestones such as births, weddings, graduations, and anniversaries to strengthen fellowship.

**Expected Impact**

- Strong sense of belonging within the church.
- Practical support during times of crisis.
- Improved emotional and spiritual well-being.
- Strong bonds of Christian love and fellowship.`,
    image_url: null,
    sort_order: 5,
  },
  {
    id: 6,
    organization_id: 1,
    part: "Church & Community",
    heading: "5. Talent and Gift Development",
    scripture_text: null,
    scripture_ref: null,
    body: `Every woman has unique gifts and abilities given by God. Women of the Living Waters seeks to help women discover, develop, and faithfully use those gifts.

**Objectives**

- Identify spiritual gifts and natural talents among members.
- Develop worship teams, choirs, drama groups, dance ministries, poetry, and creative arts.
- Encourage women to participate in music, media, writing, teaching, and other ministry opportunities.
- Offer mentorship in entrepreneurship, professional development, and vocational skills.
- Support women in developing careers and businesses that honor God.
- Recognize and celebrate the diverse gifts within the body of Christ.

**Expected Impact**

- Women serving confidently in their areas of gifting.
- Stronger worship and ministry teams.
- Increased creativity in ministry.
- Women using their talents to glorify God and bless others.`,
    image_url: null,
    sort_order: 6,
  },
  {
    id: 7,
    organization_id: 1,
    part: "Church & Community",
    heading: "6. Economic Empowerment",
    scripture_text: null,
    scripture_ref: null,
    body: `Women of the Living Waters believes that economic empowerment enables women to better support their families, contribute to the church, and serve their communities.

**Objectives**

- Establish savings and investment groups to encourage financial discipline.
- Provide training in budgeting, financial planning, and responsible stewardship.
- Offer entrepreneurship training and business mentorship.
- Encourage income-generating projects suited to local opportunities.
- Promote vocational training in areas such as tailoring, baking, agriculture, crafts, ICT, and other practical skills.
- Connect women with networking and mentorship opportunities.
- Encourage ethical business practices founded on Christian values.

**Expected Impact**

- Financially empowered women.
- Stronger family livelihoods.
- Increased self-reliance.
- Sustainable businesses.
- Greater capacity to support ministry and community needs.`,
    image_url: null,
    sort_order: 7,
  },
  {
    id: 8,
    organization_id: 1,
    part: "Church & Community",
    heading: "Community Outreach",
    scripture_text: null,
    scripture_ref: null,
    body: "Women of the Living Waters believes that the Church should actively demonstrate Christ's love through service and compassionate outreach. The ministry therefore extends beyond the church walls to reach communities with both the Gospel and practical care.",
    image_url: null,
    sort_order: 8,
  },
  {
    id: 9,
    organization_id: 1,
    part: "Church & Community",
    heading: "Evangelism and Crusades",
    scripture_text: null,
    scripture_ref: null,
    body: `**Objectives**

- Organize evangelistic meetings and community crusades.
- Conduct door-to-door evangelism.
- Share the Gospel through conferences, music, drama, literature, and media.
- Support church planting initiatives where appropriate.
- Encourage every member to participate in personal evangelism.

**Expected Impact**

- More people coming to faith in Christ.
- Stronger local churches.
- Spiritual revival in communities.`,
    image_url: null,
    sort_order: 9,
  },
  {
    id: 10,
    organization_id: 1,
    part: "Church & Community",
    heading: "Prison Ministry",
    scripture_text: null,
    scripture_ref: null,
    body: `**Objectives**

- Visit correctional facilities to share the Gospel.
- Offer prayer, counseling, and Bible study.
- Provide Christian literature and other approved resources.
- Support rehabilitation and reintegration into society in collaboration with relevant authorities.
- Encourage hope, forgiveness, and personal transformation through Christ.

**Expected Impact**

- Spiritual encouragement for incarcerated individuals.
- Positive support for rehabilitation and restoration.
- Renewed hope for inmates and their families.`,
    image_url: null,
    sort_order: 10,
  },
  {
    id: 11,
    organization_id: 1,
    part: "Church & Community",
    heading: "Hospital Visitation",
    scripture_text: null,
    scripture_ref: null,
    body: `**Objectives**

- Visit patients in hospitals.
- Pray with the sick and their families.
- Offer encouragement and emotional support.
- Provide practical assistance where resources allow.
- Share the hope and comfort found in Christ.

**Expected Impact**

- Comfort and encouragement for patients.
- Stronger pastoral care.
- Demonstration of Christ's compassion.`,
    image_url: null,
    sort_order: 11,
  },
  {
    id: 12,
    organization_id: 1,
    part: "Church & Community",
    heading: "Children's Outreach",
    scripture_text: null,
    scripture_ref: null,
    body: `**Objectives**

- Organize children's Bible clubs and holiday programs.
- Provide mentorship and life-skills training.
- Support vulnerable children through education and practical assistance where possible.
- Promote child protection and Christian values.
- Encourage children to grow in faith and develop their God-given potential.

**Expected Impact**

- Children grounded in Christian faith.
- Improved well-being and opportunities for vulnerable children.
- Future generations of godly leaders.`,
    image_url: null,
    sort_order: 12,
  },
  {
    id: 13,
    organization_id: 1,
    part: "Church & Community",
    heading: "Support for Orphans and Vulnerable Families",
    scripture_text: null,
    scripture_ref: null,
    body: `**Objectives**

- Identify families facing hardship.
- Provide food, clothing, school supplies, and other essential support as resources allow.
- Encourage foster care and community support for vulnerable children.
- Offer counseling, mentorship, and prayer.
- Mobilize church members to demonstrate compassion through practical service.

**Expected Impact**

- Improved quality of life for vulnerable families.
- Greater hope and dignity.
- Stronger community support systems.`,
    image_url: null,
    sort_order: 13,
  },
  {
    id: 14,
    organization_id: 1,
    part: "Church & Community",
    heading: "Community Clean-Up Campaigns",
    scripture_text: null,
    scripture_ref: null,
    body: `**Objectives**

- Organize regular environmental clean-up activities.
- Promote proper waste management and sanitation.
- Encourage healthy and clean living environments.
- Work alongside local communities and institutions to improve public spaces.

**Expected Impact**

- Cleaner neighborhoods.
- Improved public health.
- Greater community participation and civic responsibility.`,
    image_url: null,
    sort_order: 14,
  },
  {
    id: 15,
    organization_id: 1,
    part: "Church & Community",
    heading: "Tree Planting and Environmental Conservation",
    scripture_text: null,
    scripture_ref: null,
    body: `**Objectives**

- Promote environmental stewardship as part of caring for God's creation.
- Organize tree-planting campaigns.
- Encourage conservation of water, forests, and natural resources.
- Educate communities on sustainable environmental practices.

**Expected Impact**

- Increased environmental awareness.
- Greener and healthier communities.
- Long-term conservation of natural resources.`,
    image_url: null,
    sort_order: 15,
  },
  {
    id: 16,
    organization_id: 1,
    part: "Church & Community",
    heading: "Feeding Programs",
    scripture_text: null,
    scripture_ref: null,
    body: `**Objectives**

- Organize food distribution for vulnerable families during times of need.
- Support school feeding initiatives where possible.
- Provide meals during community outreach events and emergency situations.
- Mobilize donations to support hunger relief efforts.

**Expected Impact**

- Reduced hunger among vulnerable people.
- Improved health and well-being.
- Practical demonstration of Christian compassion.`,
    image_url: null,
    sort_order: 16,
  },
  {
    id: 17,
    organization_id: 1,
    part: "Church & Community",
    heading: "Skills Training for Unemployed Women and Youth",
    scripture_text: null,
    scripture_ref: null,
    body: `**Objectives**

- Offer vocational and entrepreneurship training.
- Equip participants with practical skills that improve employability and self-reliance.
- Provide mentorship and career guidance.
- Encourage innovation, ethical business practices, and lifelong learning.

**Expected Impact**

- Increased employment and entrepreneurship.
- Financial independence for women and young people.
- Stronger families and communities through sustainable livelihoods.`,
    image_url: null,
    sort_order: 17,
  },
  {
    id: 18,
    organization_id: 1,
    part: "Church & Community",
    heading: "Overall Church and Community Vision",
    scripture_text: null,
    scripture_ref: null,
    body: "Women of the Living Waters seeks to build a ministry where women grow deeply in Christ, lead with integrity, strengthen their families, care for one another, and use their gifts to serve God. Through compassionate outreach, evangelism, leadership development, economic empowerment, and community service, the ministry aims to be a living testimony of God's love bringing hope, healing, and transformation to the church, communities, and future generations.",
    image_url: null,
    sort_order: 18,
  },

  // ============================================================
  // Part: National Vision
  // ============================================================
  {
    id: 19,
    organization_id: 1,
    part: "National Vision",
    heading: "National Vision",
    scripture_text: "How good and pleasant it is when God's people live together in unity.",
    scripture_ref: "Psalm 133:1",
    body: "The national vision of Women of the Living Waters is to build a united, Christ-centered movement that empowers women across Kenya to become spiritual leaders, compassionate servants, and agents of transformation in their families, churches, communities, and the nation. Through discipleship, prayer, leadership development, and service, the ministry seeks to contribute to a peaceful, morally grounded, and prosperous Kenya.",
    image_url: null,
    sort_order: 19,
  },
  {
    id: 20,
    organization_id: 1,
    part: "National Vision",
    heading: "Establish Vibrant Chapters Across Kenya",
    scripture_text: null,
    scripture_ref: null,
    body: `Women of the Living Waters envisions establishing active and sustainable chapters in every county, bringing women together for worship, fellowship, discipleship, and community service.

**Objectives**

- Establish county, regional, constituency, and local church chapters across Kenya.
- Build strong leadership structures to coordinate ministry activities at every level.
- Ensure each chapter operates under the ministry's constitution, vision, mission, and core values.
- Hold regular meetings for prayer, Bible study, mentorship, and outreach.
- Encourage every chapter to identify and respond to the unique needs of its local community.
- Create a culture of accountability, excellence, and servant leadership.

**Expected Impact**

- Strong and united women's fellowships throughout Kenya.
- Consistent spiritual growth and discipleship.
- Increased participation of women in ministry and community development.
- Sustainable growth of the organization nationwide.`,
    image_url: null,
    sort_order: 20,
  },
  {
    id: 21,
    organization_id: 1,
    part: "National Vision",
    heading: "Unite Christian Women from Different Denominations",
    scripture_text: null,
    scripture_ref: null,
    body: `The ministry seeks to foster unity among Christian women while respecting the beliefs, governance, and traditions of different churches.

**Objectives**

- Create platforms where women from different denominations can worship, pray, and serve together.
- Encourage mutual respect, love, and cooperation among churches.
- Organize interdenominational women's conferences, seminars, and prayer gatherings.
- Promote biblical unity based on the shared foundation of faith in Jesus Christ.
- Encourage women to appreciate diversity while working toward common Kingdom goals.
- Build lasting friendships and support networks among Christian women.

**Expected Impact**

- Greater unity within the Body of Christ.
- Reduced division among believers.
- Stronger collaboration in evangelism and community service.
- A united Christian witness that positively influences society.`,
    image_url: null,
    sort_order: 21,
  },
  {
    id: 22,
    organization_id: 1,
    part: "National Vision",
    heading: "Train Women Leaders",
    scripture_text: null,
    scripture_ref: null,
    body: `Women of the Living Waters believes that effective leadership is essential for lasting transformation. The ministry aims to raise spiritually mature, knowledgeable, and ethical women leaders.

**Objectives**

- Identify women with leadership potential and mentor them.
- Offer leadership development programs grounded in biblical principles.
- Train women in servant leadership, governance, communication, conflict resolution, project management, and financial stewardship.
- Equip women to serve effectively in churches, families, workplaces, businesses, and communities.
- Encourage women to mentor younger generations.
- Develop leadership academies and annual training programs.

**Areas of Training**

- Spiritual leadership.
- Personal development.
- Public speaking.
- Team building.
- Emotional intelligence.
- Family leadership.
- Entrepreneurship.
- Community mobilization.
- Advocacy and social responsibility.

**Expected Impact**

- Competent and confident women leaders.
- Stronger churches and communities.
- Increased participation of women in leadership and service.
- Future generations mentored by godly role models.`,
    image_url: null,
    sort_order: 22,
  },
  {
    id: 23,
    organization_id: 1,
    part: "National Vision",
    heading: "Organize National Prayer Conferences",
    scripture_text: null,
    scripture_ref: null,
    body: `Prayer is central to the ministry's identity. Women of the Living Waters seeks to gather women from across Kenya for national seasons of worship and intercession.

**Objectives**

- Hold annual national prayer conferences.
- Organize regional prayer gatherings throughout the year.
- Mobilize women to pray for Kenya and its people.
- Encourage revival and spiritual renewal.
- Develop nationwide prayer networks connecting every chapter.
- Equip intercessors through biblical teaching on prayer.

**Prayer Focus Areas**

- National peace and unity.
- Government leaders.
- Churches and ministers.
- Families and marriages.
- Children and youth.
- Education.
- Economic growth and employment.
- Health and healing.
- Protection from disasters.
- Revival and evangelism.

**Expected Impact**

- Greater spiritual awakening.
- Stronger unity among Christians.
- Increased dependence on God in addressing national challenges.
- A nationwide culture of prayer and faith.`,
    image_url: null,
    sort_order: 23,
  },
  {
    id: 24,
    organization_id: 1,
    part: "National Vision",
    heading: "Promote Peace, Unity, and Moral Values",
    scripture_text: null,
    scripture_ref: null,
    body: `The ministry desires to contribute to a Kenya where biblical values inspire healthy relationships, responsible leadership, and peaceful communities.

**Objectives**

- Promote forgiveness, reconciliation, and peaceful coexistence.
- Teach biblical principles on integrity, honesty, respect, and servant leadership.
- Encourage women to become peacemakers in their families and communities.
- Support initiatives that strengthen marriages and family life.
- Mentor young women and girls to develop godly character and make wise life choices.
- Encourage responsible citizenship and respect for the rule of law.

**Expected Impact**

- Stronger families.
- Reduced conflict within communities.
- Positive role models for younger generations.
- Communities characterized by peace, integrity, and mutual respect.`,
    image_url: null,
    sort_order: 24,
  },
  {
    id: 25,
    organization_id: 1,
    part: "National Vision",
    heading: "Partner with Churches, Schools, and Government Institutions",
    scripture_text: null,
    scripture_ref: null,
    body: `The ministry believes that collaboration enhances its ability to serve communities while remaining faithful to its Christian mission.

**Church Partnerships**

- Support local churches through women's ministry programs.
- Conduct joint evangelism, conferences, and leadership training.
- Share resources and expertise to strengthen ministry.

**Schools and Educational Institutions**

- Mentor girls and young women.
- Provide guidance on leadership, character, and life skills.
- Offer scholarships and educational support where possible.
- Promote literacy, career development, and mentorship.

**Government Institutions**

- Collaborate on programs that promote community development, education, health, disaster response, and women's empowerment, while maintaining the ministry's Christian identity and respecting public institutions.
- Participate in national initiatives that improve the well-being of communities.
- Encourage civic responsibility and ethical leadership.

**Expected Impact**

- Stronger support systems for women and families.
- Increased access to education and leadership opportunities.
- Improved community development through coordinated efforts.
- Greater trust and cooperation between faith-based organizations and public institutions.`,
    image_url: null,
    sort_order: 25,
  },
  {
    id: 26,
    organization_id: 1,
    part: "National Vision",
    heading: "Support Disaster Response and Humanitarian Initiatives",
    scripture_text: null,
    scripture_ref: null,
    body: `Women of the Living Waters is committed to demonstrating Christ's compassion by responding to the needs of people affected by hardship and emergencies.

**Objectives**

- Mobilize volunteers and resources during natural disasters and other humanitarian crises.
- Provide food, clothing, blankets, and essential household items to affected families.
- Offer emotional, spiritual, and pastoral support to those experiencing loss and trauma.
- Support vulnerable groups such as widows, orphans, persons with disabilities, and elderly people.
- Conduct medical outreach and health awareness programs where resources allow.
- Promote environmental stewardship through activities such as tree planting, clean-up campaigns, and water conservation.

**Expected Impact**

- Relief for families facing emergencies.
- Healthier and more resilient communities.
- Greater hope through practical expressions of Christian love.
- A visible testimony of God's compassion through acts of service.`,
    image_url: null,
    sort_order: 26,
  },
  {
    id: 27,
    organization_id: 1,
    part: "National Vision",
    heading: "The National Vision",
    scripture_text: null,
    scripture_ref: null,
    body: "Women of the Living Waters envisions a Kenya where women are spiritually mature, united in Christ, equipped to lead with integrity, and committed to serving their communities. Through vibrant chapters in every county, leadership development, national prayer, strategic partnerships, and compassionate outreach, the ministry seeks to strengthen families, support churches, uplift vulnerable people, and contribute to a peaceful, morally grounded, and God-honoring nation.",
    image_url: null,
    sort_order: 27,
  },

  // ============================================================
  // Part: International Vision
  // ============================================================
  {
    id: 28,
    organization_id: 1,
    part: "International Vision",
    heading: "International Vision",
    scripture_text: "Go therefore and make disciples of all nations...",
    scripture_ref: "Matthew 28:19–20",
    body: "The international vision of Women of the Living Waters is to become a Christ-centered global movement that transforms women spiritually, socially, and economically while advancing the Kingdom of God through prayer, discipleship, missions, and humanitarian service. This vision seeks to impact families, churches, communities, and nations by raising women who are empowered by the Holy Spirit to serve God and humanity.",
    image_url: null,
    sort_order: 28,
  },
  {
    id: 29,
    organization_id: 1,
    part: "International Vision",
    heading: "Establishing International Chapters",
    scripture_text: null,
    scripture_ref: null,
    body: `The vision is to establish Women of the Living Waters chapters in different countries, creating a global family of women united by faith, purpose, and service.

**Objectives**

- Register legally recognized branches where required by local laws.
- Appoint and train national, regional, and local leadership teams.
- Develop constitutions and governance structures that maintain the ministry's vision while respecting local cultures.
- Hold weekly, monthly, and annual fellowship meetings for worship, prayer, Bible study, and mutual encouragement.
- Raise women leaders who will mentor future generations.
- Encourage every chapter to carry out outreach programs that respond to the needs of their communities.

**Expected Impact**

- A united international network of Christian women.
- Strong leadership capable of sustaining ministry growth.
- Spiritual and social transformation within local communities.
- Greater unity among women across nations.`,
    image_url: null,
    sort_order: 29,
  },
  {
    id: 30,
    organization_id: 1,
    part: "International Vision",
    heading: "Global Prayer Network",
    scripture_text: null,
    scripture_ref: null,
    body: `Prayer is the heartbeat of Women of the Living Waters. The ministry envisions a worldwide prayer movement where women from every nation stand together in intercession.

**Objectives**

- Establish 24-hour international prayer chains involving different time zones.
- Organize annual global prayer conferences and retreats.
- Conduct online prayer meetings connecting women worldwide.
- Develop trained intercessors who pray consistently for nations and the Church.
- Publish prayer guides focused on global and local needs.

**Prayer Focus Areas**

- Revival in the Church.
- Salvation of nations.
- Peace and reconciliation.
- Families and marriages.
- Children and youth.
- Government leaders and public institutions.
- Missionaries and church leaders.
- Economic stability and employment.
- Healing and restoration.

**Expected Impact**

- Stronger spiritual unity across nations.
- Increased revival and evangelism.
- Encouragement for believers through shared prayer.
- Greater dependence on God's guidance in ministry.`,
    image_url: null,
    sort_order: 30,
  },
  {
    id: 31,
    organization_id: 1,
    part: "International Vision",
    heading: "Missionary Work",
    scripture_text: null,
    scripture_ref: null,
    body: `Women of the Living Waters desires to actively participate in fulfilling Christ's Great Commission by reaching people with the Gospel.

**Objectives**

- Support missionaries through prayer, finances, and practical assistance.
- Send trained mission teams to different countries.
- Plant churches where there is little or no Christian witness, in partnership with local churches where appropriate.
- Organize evangelistic crusades and outreach programs.
- Translate discipleship materials into local languages where possible.
- Mentor new believers and establish discipleship programs.
- Equip local women to become evangelists and church leaders.

**Mission Activities**

- Door-to-door evangelism.
- Children's ministry.
- Women's conferences.
- Youth outreach.
- Community development projects.
- Leadership training.

**Expected Impact**

- More people hearing the Gospel.
- Stronger local churches.
- New disciples equipped to serve Christ.
- Communities transformed through Christian witness.`,
    image_url: null,
    sort_order: 31,
  },
  {
    id: 32,
    organization_id: 1,
    part: "International Vision",
    heading: "Women's Empowerment",
    scripture_text: null,
    scripture_ref: null,
    body: `The ministry seeks to empower women spiritually, intellectually, emotionally, and economically so they can fulfill their God-given purpose.

**Spiritual Empowerment**

- Bible study programs.
- Discipleship classes.
- Leadership development.
- Mentorship.

**Educational Empowerment**

- Scholarships for vulnerable girls and women.
- Literacy programs.
- Professional development.
- Leadership academies.

**Economic Empowerment**

- Entrepreneurship training.
- Savings and investment groups.
- Financial literacy.
- Vocational skills such as tailoring, agriculture, baking, ICT, and crafts.
- Business mentorship.

**Health and Wellness**

- Maternal health education.
- Mental health awareness.
- Nutrition education.
- Cancer awareness.
- Reproductive health education presented in a manner consistent with the ministry's Christian values.
- Wellness seminars.

**Expected Impact**

- Women becoming financially independent.
- Stronger Christian leaders.
- Better health outcomes.
- Increased confidence and dignity.
- Families lifted out of poverty through sustainable livelihoods.`,
    image_url: null,
    sort_order: 32,
  },
  {
    id: 33,
    organization_id: 1,
    part: "International Vision",
    heading: "Humanitarian Ministry",
    scripture_text: null,
    scripture_ref: null,
    body: `The love of Christ is demonstrated through acts of compassion. Women of the Living Waters is committed to serving vulnerable people regardless of background.

**Disaster Relief**

- Emergency food distribution.
- Clothing and blankets.
- Temporary shelter support.
- Emotional and spiritual care.

**Poverty Alleviation**

- Food programs.
- Community kitchens.
- Support for widows.
- Assistance for orphaned and vulnerable children.

**Water and Sanitation**

- Clean water projects.
- Borehole construction where feasible.
- Water purification initiatives.
- Hygiene education.

**Medical Outreach**

- Medical camps.
- Health screening.
- Maternal healthcare support.
- Blood donation drives.
- Distribution of essential medical supplies where appropriate.

**Refugee and Displaced Persons Support**

- Food assistance.
- Clothing.
- Education support.
- Counseling.
- Spiritual care.

**Expected Impact**

- Reduced suffering among vulnerable communities.
- Improved health and well-being.
- Greater hope through practical expressions of Christian love.
- Stronger relationships between the ministry and local communities.`,
    image_url: null,
    sort_order: 33,
  },
  {
    id: 34,
    organization_id: 1,
    part: "International Vision",
    heading: "Global Partnerships",
    scripture_text: null,
    scripture_ref: null,
    body: `The ministry recognizes that lasting impact is strengthened through collaboration with others who share a commitment to serving people and advancing God's Kingdom.

**Church Partnerships**

- Work with churches across denominations while respecting their leadership and beliefs.
- Joint prayer meetings.
- Leadership exchanges.
- Shared evangelistic outreach.

**Christian Organizations**

- Collaborate on missions.
- Leadership training.
- Humanitarian programs.
- Child sponsorship initiatives.

**Government Partnerships**

- Work with government agencies where appropriate to support community development, education, health, and disaster response while maintaining the ministry's Christian identity and independence.

**NGO Partnerships**

- Women's empowerment.
- Poverty reduction.
- Environmental conservation.
- Education.
- Healthcare initiatives.

**International Ministry Networks**

- Exchange knowledge and best practices.
- Leadership conferences.
- Cross-cultural mission opportunities.
- Resource sharing.
- Joint humanitarian responses.

**Expected Impact**

- Expanded ministry reach.
- Better use of resources.
- Greater effectiveness in serving communities.
- Increased opportunities for women to lead and serve internationally.
- Sustainable growth and long-term global influence.`,
    image_url: null,
    sort_order: 34,
  },
  {
    id: 35,
    organization_id: 1,
    part: "International Vision",
    heading: "A Lasting Global Movement",
    scripture_text: null,
    scripture_ref: null,
    body: "Women of the Living Waters envisions a world where women are transformed by Christ, equipped through discipleship, strengthened by prayer, empowered to lead, and inspired to serve their communities with compassion. Through strong international chapters, missions, humanitarian outreach, leadership development, and strategic partnerships, the ministry seeks to see lives changed, families restored, churches strengthened, and nations impacted for the glory of God. Guided by the Holy Spirit and rooted in biblical truth, Women of the Living Waters desires to become a lasting global movement that reflects the love of Christ and brings hope to generations around the world.",
    image_url: null,
    sort_order: 35,
  },
];
