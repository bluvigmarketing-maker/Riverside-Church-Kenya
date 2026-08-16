-- River Church Eldoret — Phase 1 seed data
-- Sourced from Client-Requests.md (client-authored copy) and the old-site
-- screenshots in Content Library/. Run after 0001_init.sql.
--
-- Image columns store a PATH inside the `media` Storage bucket (e.g.
-- 'leadership/pastor-borness.jpg'), not a full URL — the app resolves the
-- public URL at render time via lib/supabase/media.ts. Run
-- scripts/upload-media.ts first (see SETUP.md) so these paths resolve.

-- ============================================================
-- site_settings
-- ============================================================
insert into site_settings (
  tagline, motto, vision, mission, key_scripture_text, key_scripture_ref,
  address, phone, email, service_times, social_links
) values (
  E'Where God\'s River Never Runs Dry — It Just Flows',
  E'Where God\'s River Never Runs Dry, it just flows',
  'To be a life-giving church where the presence of God flows like a river, bringing salvation, healing, restoration, and hope to all people.',
  E'To lead people into a transforming relationship with Jesus Christ through worship, prayer, teaching of God\'s Word, discipleship, compassion, and the power of the Holy Spirit, so that lives, families, and communities may be healed and restored.',
  E'Then the angel showed me the river of the water of life, as clear as crystal, flowing from the throne of God and of the Lamb... and the leaves of the tree were for the healing of the nations.',
  'Revelation 22:1-3',
  'Marura, Eldoret, Kenya', -- TODO: replace with the precise physical address/directions
  null, -- TODO: add a public contact phone number
  null, -- TODO: add a public contact email
  '[]'::jsonb, -- TODO: add real service times, e.g. [{"label": "Sunday Worship", "value": "10:00 AM"}]
  '[]'::jsonb  -- TODO: add social links, e.g. [{"platform": "facebook", "url": "https://facebook.com/..."}]
);

-- ============================================================
-- leaders
-- ============================================================
insert into leaders (name, role_title, quote, bio, photo_url, hometown, education, ordination_info, attributes, sort_order)
values (
  'Pastor Borness Chepchirchir Biwott',
  'Senior Pastor',
  E'Step into the river of God\'s grace and experience His life-changing power.',
  $$Pastor Borness Chepchirchir Biwott is the Senior Pastor of River Church Eldoret. She is a devoted servant of God whose life reflects deep faith, humility, compassion, and an unwavering commitment to the Kingdom of God.

Born and raised in Chepterit Village, Nandi County, Kenya, in a humble family, Pastor Borness learned the values of hard work, respect, integrity, and the fear of the Lord from a young age. From her early years, she demonstrated a deep love for God and a gentle, prayerful disposition. Growing up in the village, she assisted her parents with household chores and faithfully cared for her family's cattle, developing virtues of diligence, responsibility, endurance, and humility.

After completing secondary school, Pastor Borness pursued studies in Logistics and Management at Machakos University. Her passion for spiritual service continued to burn brightly. In 2009, she married the love of her life, Pastor Ezra Biwott. United by faith and a common vision, they have served together in ministry ever since, and together founded River Church Eldoret.

Today, Pastor Borness is a loving wife, mother, cherished leader, and compassionate shepherd to hundreds of believers. Known for her warm smile, wisdom, prayerfulness, and approachable nature, her ministry is marked by a deep dependence on the Holy Spirit and a passion for seeing lives, families, and communities restored by Jesus Christ.$$,
  'leadership/pastor-borness.jpg',
  'Chepterit Village, Nandi County',
  'Machakos University (Logistics and Management)',
  null,
  array['Prayerful', 'Visionary', 'Compassionate', 'Humble', 'Gracious', 'Disciplined'],
  1
);

insert into leaders (name, role_title, quote, bio, photo_url, hometown, education, ordination_info, attributes, sort_order)
values (
  'Pastor Ezra Kipkogei Biwott',
  'Associate Pastor',
  E'Known for his powerful prayer life, humility, and gentle spirit, Pastor Ezra faithfully balances ministry with farming, demonstrating that excellence in both spiritual and practical life brings glory to God.',
  $$Pastor Ezra Kipkogei Biwott serves faithfully as Associate Pastor at River Church Eldoret alongside his wife, Senior Pastor Borness. He is a devoted minister of the Gospel, a loving family man, and a successful large-scale farmer.

Born in Sogomo Village, Uasin Gishu County, Kenya, Pastor Ezra grew up in a humble Christian family. As the youngest child, he was known for his cheerful nature, respectfulness, and strong work ethic. Helping his father on the farm ignited a lifelong passion for agriculture, particularly maize and vegetable farming, while instilling in him values of perseverance, patience, and stewardship.

After completing high school, Pastor Ezra studied Business Administration at Good Samaritan College of Business in Nakuru. Upon graduating, he applied his knowledge to agriculture, growing into a highly successful large-scale farmer while maintaining uncompromising integrity.

In 2018, Pastor Ezra answered God's call to step into ministry alongside his wife. His unwavering dedication and spiritual growth led to his official ordination as a pastor in 2023. Known for his powerful prayer life, humility, and gentle spirit, Pastor Ezra faithfully balances ministry with farming, demonstrating that excellence in both spiritual and practical life brings glory to God.$$,
  'leadership/pastor-ezra.jpg',
  'Sogomo Village, Uasin Gishu County',
  'Good Samaritan College of Business, Nakuru (Business Administration)',
  'Ordained Pastor, 2023',
  array['Servant-Hearted', 'Faithful Steward', 'Fervent Intercessor', 'Diligent', 'Generous', 'Integrity'],
  2
);

-- ============================================================
-- history_sections
-- ============================================================
insert into history_sections (heading, subheading, body, sort_order)
values (
  'A Divine Vision Given by God',
  null,
  $$The foundation of River Church Eldoret rests upon a remarkable divine revelation given to Senior Pastor Borness Chepchirchir Biwott.

In a dream, Pastor Borness saw a river of clear, crystal-like water flowing, with reeds growing along its banks. She witnessed people stepping into the flowing water and receiving miraculous healing — echoing the river of life described in Revelation 22:1-3, where the Apostle John writes: "Then the angel showed me the river of the water of life, as clear as crystal, flowing from the throne of God and of the Lamb... and the leaves of the tree are for the healing of the nations."

In that same vision, God revealed a specific location: Marura — the very place that later became the home of River Church Eldoret, confirming God's guidance and faithfulness.$$,
  1
);

insert into history_sections (heading, subheading, body, sort_order)
values (
  'Faithful Beginnings',
  '2018–2020',
  $$Long before the church was established, Pastor Borness had dedicated herself to seeking the Lord through prayer and fasting.

Beginning in 2018, she spent many days praying both at home and on prayer mountains, earnestly asking God to reveal His purpose and direction for her life because she knew she had been called to serve Him. As she faithfully sought God, she began praying for people in her home, and many experienced healing and the touch of God. These miracles strengthened her conviction that God was preparing her for a greater ministry.

In 2020, while praying together with her husband, Pastor Ezra Biwott, Pastor Borness heard the voice of the Lord instructing them to begin a church. In obedience to God's call, they searched for a place to rent and officially started the ministry with only five members.$$,
  2
);

insert into history_sections (heading, subheading, body, sort_order)
values (
  'Growth and Expansion',
  '2020–Present',
  $$From that humble beginning, God has continually added to the church. Through His grace and power, River Church Eldoret has grown steadily and today has a congregation of approximately 700 members.

In 2025, the ministry was blessed to acquire land at the exact location where Pastor Borness had seen the river flowing in her vision. Temporary tents were erected to serve as the place of worship while plans for permanent development began.

Earlier this year, the church completed construction of a Sunday School facility that now serves up to 300 children, providing them a safe place to learn the Word of God and grow in their faith.$$,
  3
);

insert into history_sections (heading, subheading, body, sort_order)
values (
  'Looking Forward to the Future',
  null,
  $$Although the congregation continues to worship under tents, the vision remains alive. River Church Eldoret is trusting God to build a magnificent sanctuary dedicated to His glory before the end of this year. This sanctuary will provide a permanent place of worship, discipleship, prayer, and outreach for generations to come.

River Church Eldoret stands as a testimony that when God gives a vision, He also provides the grace, the people, and the resources to bring it to fulfillment. The ministry remains committed to proclaiming the Gospel of Jesus Christ, raising faithful disciples, nurturing children, healing the broken, and demonstrating the transforming power of the Holy Spirit to all who come.$$,
  4
);

-- ============================================================
-- programs — "Pillars of Our Faith"
-- ============================================================
insert into programs (title, icon_name, description, tag_label, sort_order) values
  ('Spiritual Renewal & Revival', 'flame', 'Experiencing the fresh, continuous flow of the Holy Spirit daily in our lives and corporate worship.', 'Holy Spirit Flow', 1),
  ('God-Centered Worship', 'music', 'Exalting the Lord in holiness, spirit, and truth with reverent hearts and passionate praise.', 'Holiness & Truth', 2),
  ('Healing & Restoration', 'heart-pulse', E'Bringing Christ\'s divine compassion and miraculous power to broken hearts, families, and nations.', 'Compassion & Healing', 3),
  ('Freedom in Christ', 'unlock', 'Walking in total deliverance, hope, and freedom from every spiritual curse through the blood of Jesus.', 'Deliverance & Hope', 4),
  ('Discipleship & Service', 'users', 'Raising faithful, grounded believers committed to Kingdom ministry and active community service.', 'Kingdom Ministry', 5);

-- ============================================================
-- events — one sample event so the homepage countdown has something to
-- show. Replace/add real events via the Supabase Table Editor.
-- ============================================================
insert into events (title, slug, description, starts_at, location, is_featured, donation_enabled)
values (
  'Sanctuary Building Fund Sunday (sample — replace before launch)',
  'sanctuary-building-fund-sunday',
  'Join us for a special service dedicated to the vision of our new permanent sanctuary in Marura.',
  '2026-09-06 10:00:00+03',
  'Marura, Eldoret',
  true,
  true
);

-- ============================================================
-- organizations — Women of the Living Waters (run 0004_organizations.sql first)
-- ============================================================
insert into organizations (
  slug, name, short_description, motto, theme_scripture_text, theme_scripture_ref,
  vision, mission, logo_url, sort_order
) values (
  'women-of-the-living-waters',
  'Women of the Living Waters',
  E'A women\'s ministry (CBO) under River Church Eldoret raising spiritually mature, empowered, and influential women who transform families, churches, communities, and nations.',
  E'Flowing in God\'s Love, Transforming Lives and Nations.',
  E'Whoever believes in me, as Scripture has said, rivers of living water will flow from within them.',
  'John 7:38',
  'To raise spiritually mature, empowered, compassionate, and influential women who transform families, churches, communities, and nations through the love and power of Jesus Christ.',
  'To equip women spiritually, socially, economically, and emotionally so they can become godly leaders, agents of change, and a source of hope in their communities and around the world.',
  'organizations/women-of-the-living-waters-logo.jpg', -- run scripts/upload-media.ts (or upload via admin) so this path resolves
  1
);

-- ============================================================
-- organization_sections — Church & Community / National / International
-- ============================================================
insert into organization_sections (organization_id, part, heading, scripture_text, scripture_ref, body, sort_order)
values (
  1, 'Church & Community', 'Objectives Within the Church and Community',
  'You are the light of the world... let your light shine before others, that they may see your good deeds and glorify your Father in heaven.',
  'Matthew 5:14–16',
  E'The ministry of Women of the Living Waters exists to nurture women into spiritually mature disciples of Christ who serve faithfully within the church and become instruments of transformation in their homes, workplaces, and communities. These objectives provide a framework for strengthening the church while extending Christ\'s love beyond its walls.',
  1
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', '1. Spiritual Growth',
  $$The highest priority of Women of the Living Waters is to help every woman grow in her personal relationship with Jesus Christ. Spiritual maturity equips women to live lives that glorify God and positively influence their families and communities.

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
- A spiritually vibrant church that influences society for Christ.$$,
  2
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', '2. Leadership Development',
  $$Women of the Living Waters seeks to raise confident, servant-hearted women leaders who faithfully serve God in the church and society.

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
- A new generation of women equipped to mentor others.$$,
  3
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', '3. Family Strengthening',
  $$Healthy families are the foundation of healthy churches and communities. Women of the Living Waters is committed to strengthening families according to biblical principles.

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
- Children raised in Christian values.$$,
  4
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', E'4. Women\'s Welfare',
  $$The ministry is committed to demonstrating Christ's compassion by caring for women during times of need, celebrating with them in times of joy, and walking alongside them through life's challenges.

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
- Strong bonds of Christian love and fellowship.$$,
  5
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', '5. Talent and Gift Development',
  $$Every woman has unique gifts and abilities given by God. Women of the Living Waters seeks to help women discover, develop, and faithfully use those gifts.

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
- Women using their talents to glorify God and bless others.$$,
  6
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', '6. Economic Empowerment',
  $$Women of the Living Waters believes that economic empowerment enables women to better support their families, contribute to the church, and serve their communities.

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
- Greater capacity to support ministry and community needs.$$,
  7
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', 'Community Outreach',
  E'Women of the Living Waters believes that the Church should actively demonstrate Christ\'s love through service and compassionate outreach. The ministry therefore extends beyond the church walls to reach communities with both the Gospel and practical care.',
  8
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', 'Evangelism and Crusades',
  $$**Objectives**

- Organize evangelistic meetings and community crusades.
- Conduct door-to-door evangelism.
- Share the Gospel through conferences, music, drama, literature, and media.
- Support church planting initiatives where appropriate.
- Encourage every member to participate in personal evangelism.

**Expected Impact**

- More people coming to faith in Christ.
- Stronger local churches.
- Spiritual revival in communities.$$,
  9
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', 'Prison Ministry',
  $$**Objectives**

- Visit correctional facilities to share the Gospel.
- Offer prayer, counseling, and Bible study.
- Provide Christian literature and other approved resources.
- Support rehabilitation and reintegration into society in collaboration with relevant authorities.
- Encourage hope, forgiveness, and personal transformation through Christ.

**Expected Impact**

- Spiritual encouragement for incarcerated individuals.
- Positive support for rehabilitation and restoration.
- Renewed hope for inmates and their families.$$,
  10
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', 'Hospital Visitation',
  $$**Objectives**

- Visit patients in hospitals.
- Pray with the sick and their families.
- Offer encouragement and emotional support.
- Provide practical assistance where resources allow.
- Share the hope and comfort found in Christ.

**Expected Impact**

- Comfort and encouragement for patients.
- Stronger pastoral care.
- Demonstration of Christ's compassion.$$,
  11
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', E'Children\'s Outreach',
  $$**Objectives**

- Organize children's Bible clubs and holiday programs.
- Provide mentorship and life-skills training.
- Support vulnerable children through education and practical assistance where possible.
- Promote child protection and Christian values.
- Encourage children to grow in faith and develop their God-given potential.

**Expected Impact**

- Children grounded in Christian faith.
- Improved well-being and opportunities for vulnerable children.
- Future generations of godly leaders.$$,
  12
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', 'Support for Orphans and Vulnerable Families',
  $$**Objectives**

- Identify families facing hardship.
- Provide food, clothing, school supplies, and other essential support as resources allow.
- Encourage foster care and community support for vulnerable children.
- Offer counseling, mentorship, and prayer.
- Mobilize church members to demonstrate compassion through practical service.

**Expected Impact**

- Improved quality of life for vulnerable families.
- Greater hope and dignity.
- Stronger community support systems.$$,
  13
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', 'Community Clean-Up Campaigns',
  $$**Objectives**

- Organize regular environmental clean-up activities.
- Promote proper waste management and sanitation.
- Encourage healthy and clean living environments.
- Work alongside local communities and institutions to improve public spaces.

**Expected Impact**

- Cleaner neighborhoods.
- Improved public health.
- Greater community participation and civic responsibility.$$,
  14
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', 'Tree Planting and Environmental Conservation',
  $$**Objectives**

- Promote environmental stewardship as part of caring for God's creation.
- Organize tree-planting campaigns.
- Encourage conservation of water, forests, and natural resources.
- Educate communities on sustainable environmental practices.

**Expected Impact**

- Increased environmental awareness.
- Greener and healthier communities.
- Long-term conservation of natural resources.$$,
  15
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', 'Feeding Programs',
  $$**Objectives**

- Organize food distribution for vulnerable families during times of need.
- Support school feeding initiatives where possible.
- Provide meals during community outreach events and emergency situations.
- Mobilize donations to support hunger relief efforts.

**Expected Impact**

- Reduced hunger among vulnerable people.
- Improved health and well-being.
- Practical demonstration of Christian compassion.$$,
  16
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', 'Skills Training for Unemployed Women and Youth',
  $$**Objectives**

- Offer vocational and entrepreneurship training.
- Equip participants with practical skills that improve employability and self-reliance.
- Provide mentorship and career guidance.
- Encourage innovation, ethical business practices, and lifelong learning.

**Expected Impact**

- Increased employment and entrepreneurship.
- Financial independence for women and young people.
- Stronger families and communities through sustainable livelihoods.$$,
  17
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'Church & Community', 'Overall Church and Community Vision',
  E'Women of the Living Waters seeks to build a ministry where women grow deeply in Christ, lead with integrity, strengthen their families, care for one another, and use their gifts to serve God. Through compassionate outreach, evangelism, leadership development, economic empowerment, and community service, the ministry aims to be a living testimony of God\'s love bringing hope, healing, and transformation to the church, communities, and future generations.',
  18
);

insert into organization_sections (organization_id, part, heading, scripture_text, scripture_ref, body, sort_order)
values (
  1, 'National Vision', 'National Vision',
  E'How good and pleasant it is when God\'s people live together in unity.',
  'Psalm 133:1',
  'The national vision of Women of the Living Waters is to build a united, Christ-centered movement that empowers women across Kenya to become spiritual leaders, compassionate servants, and agents of transformation in their families, churches, communities, and the nation. Through discipleship, prayer, leadership development, and service, the ministry seeks to contribute to a peaceful, morally grounded, and prosperous Kenya.',
  19
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'National Vision', 'Establish Vibrant Chapters Across Kenya',
  $$Women of the Living Waters envisions establishing active and sustainable chapters in every county, bringing women together for worship, fellowship, discipleship, and community service.

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
- Sustainable growth of the organization nationwide.$$,
  20
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'National Vision', 'Unite Christian Women from Different Denominations',
  $$The ministry seeks to foster unity among Christian women while respecting the beliefs, governance, and traditions of different churches.

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
- A united Christian witness that positively influences society.$$,
  21
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'National Vision', 'Train Women Leaders',
  $$Women of the Living Waters believes that effective leadership is essential for lasting transformation. The ministry aims to raise spiritually mature, knowledgeable, and ethical women leaders.

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
- Future generations mentored by godly role models.$$,
  22
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'National Vision', 'Organize National Prayer Conferences',
  $$Prayer is central to the ministry's identity. Women of the Living Waters seeks to gather women from across Kenya for national seasons of worship and intercession.

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
- A nationwide culture of prayer and faith.$$,
  23
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'National Vision', 'Promote Peace, Unity, and Moral Values',
  $$The ministry desires to contribute to a Kenya where biblical values inspire healthy relationships, responsible leadership, and peaceful communities.

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
- Communities characterized by peace, integrity, and mutual respect.$$,
  24
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'National Vision', 'Partner with Churches, Schools, and Government Institutions',
  $$The ministry believes that collaboration enhances its ability to serve communities while remaining faithful to its Christian mission.

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
- Greater trust and cooperation between faith-based organizations and public institutions.$$,
  25
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'National Vision', 'Support Disaster Response and Humanitarian Initiatives',
  $$Women of the Living Waters is committed to demonstrating Christ's compassion by responding to the needs of people affected by hardship and emergencies.

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
- A visible testimony of God's compassion through acts of service.$$,
  26
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'National Vision', 'The National Vision',
  E'Women of the Living Waters envisions a Kenya where women are spiritually mature, united in Christ, equipped to lead with integrity, and committed to serving their communities. Through vibrant chapters in every county, leadership development, national prayer, strategic partnerships, and compassionate outreach, the ministry seeks to strengthen families, support churches, uplift vulnerable people, and contribute to a peaceful, morally grounded, and God-honoring nation.',
  27
);

insert into organization_sections (organization_id, part, heading, scripture_text, scripture_ref, body, sort_order)
values (
  1, 'International Vision', 'International Vision',
  'Go therefore and make disciples of all nations...',
  E'Matthew 28:19–20',
  'The international vision of Women of the Living Waters is to become a Christ-centered global movement that transforms women spiritually, socially, and economically while advancing the Kingdom of God through prayer, discipleship, missions, and humanitarian service. This vision seeks to impact families, churches, communities, and nations by raising women who are empowered by the Holy Spirit to serve God and humanity.',
  28
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'International Vision', 'Establishing International Chapters',
  $$The vision is to establish Women of the Living Waters chapters in different countries, creating a global family of women united by faith, purpose, and service.

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
- Greater unity among women across nations.$$,
  29
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'International Vision', 'Global Prayer Network',
  $$Prayer is the heartbeat of Women of the Living Waters. The ministry envisions a worldwide prayer movement where women from every nation stand together in intercession.

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
- Greater dependence on God's guidance in ministry.$$,
  30
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'International Vision', 'Missionary Work',
  $$Women of the Living Waters desires to actively participate in fulfilling Christ's Great Commission by reaching people with the Gospel.

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
- Communities transformed through Christian witness.$$,
  31
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'International Vision', E'Women\'s Empowerment',
  $$The ministry seeks to empower women spiritually, intellectually, emotionally, and economically so they can fulfill their God-given purpose.

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
- Families lifted out of poverty through sustainable livelihoods.$$,
  32
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'International Vision', 'Humanitarian Ministry',
  $$The love of Christ is demonstrated through acts of compassion. Women of the Living Waters is committed to serving vulnerable people regardless of background.

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
- Stronger relationships between the ministry and local communities.$$,
  33
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'International Vision', 'Global Partnerships',
  $$The ministry recognizes that lasting impact is strengthened through collaboration with others who share a commitment to serving people and advancing God's Kingdom.

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
- Sustainable growth and long-term global influence.$$,
  34
);

insert into organization_sections (organization_id, part, heading, body, sort_order)
values (
  1, 'International Vision', 'A Lasting Global Movement',
  E'Women of the Living Waters envisions a world where women are transformed by Christ, equipped through discipleship, strengthened by prayer, empowered to lead, and inspired to serve their communities with compassion. Through strong international chapters, missions, humanitarian outreach, leadership development, and strategic partnerships, the ministry seeks to see lives changed, families restored, churches strengthened, and nations impacted for the glory of God. Guided by the Holy Spirit and rooted in biblical truth, Women of the Living Waters desires to become a lasting global movement that reflects the love of Christ and brings hope to generations around the world.',
  35
);
