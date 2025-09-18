import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import {
  MapPin, Mountain, Users, Leaf, GraduationCap, Camera, Share2, Mail, Calendar,
  Sparkles, ArrowRight, Landmark, HeartHandshake, BookOpenText, Building2, Film
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/logo.png";
import heroPlaceholder from "@/assets/hero-placeholder.webp";
import { cn } from "@/lib/utils";

/**
 * 单文件、现代化、响应式、极简而高级的实践团官网
 * - Tailwind CSS 风格（UI 框架：shadcn/ui）
 * - 动效：Framer Motion
 * - 图标：lucide-react
 *
 * 使用：在支持 Tailwind 与 shadcn 的项目中直接作为页面组件渲染。
 */

const stops = [
  { city: "福泉", subtitle: "桥文化与教育振兴", detail: "走进福泉中学，访校友，感受‘桥文化’在青少年的代际传承。", icon: <Landmark className="w-4 h-4"/> },
  { city: "榕江", subtitle: "村超与灾后重建", detail: "在‘村超’赛场与场坝街，记录全民参与与重建速度。", icon: <Users className="w-4 h-4"/> },
  { city: "新店·岩湾村", subtitle: "产业振兴", detail: "对话果农：品牌缺失、渠道单一的现实与破题。", icon: <Leaf className="w-4 h-4"/> },
  { city: "贵安", subtitle: "数字中国", detail: "走进数据中心，理解算力与治理的底层逻辑。", icon: <Building2 className="w-4 h-4"/> },
  { city: "贵阳", subtitle: "城市治理", detail: "地铁与城市大脑，见证数字化的脉动。", icon: <MapPin className="w-4 h-4"/> },
];

const projects = [
  {
    title: "非遗数字化 · 影像档案",
    desc: "以纪录片工作流采集侗族蓝靛扎染、侗族大歌等素材，建立可检索素材库。",
    icon: <Camera className="w-5 h-5"/>,
    tags: ["纪录片", "非遗", "多模态"],
  },
  {
    title: "品牌与电商培训",
    desc: "为本地农品构建品牌识别系统，并设计线上店铺模板与运营SOP。",
    icon: <Share2 className="w-5 h-5"/>,
    tags: ["品牌设计", "电商", "SOP"],
  },
  {
    title: "青年返乡赋能计划",
    desc: "面向在校生的返乡实践指南：岗位对接、技能清单、项目孵化。",
    icon: <GraduationCap className="w-5 h-5"/>,
    tags: ["培训", "指南", "社区"],
  },
  {
    title: "数据洞察与问卷画像",
    desc: "以数据思维设计问卷与画像框架，形成可复用调研范式。",
    icon: <BookOpenText className="w-5 h-5"/>,
    tags: ["数据", "调研", "范式"],
  },
];

const stats = [
  { label: "实地走访里程", value: "1200+ km" },
  { label: "深度访谈/问卷", value: "230+" },
  { label: "影像素材时长", value: "48+ hrs" },
  { label: "落地方案数", value: "12" },
];

const partners = [
  "北京交通大学", "地方政府与乡村振兴部门", "中学与村社组织", "本地企业与合作社"
];

const videoCollections = [
  {
    title: "传承之路",
    subtitle: "记录非遗与乡土文化的延续",
    file: "/videos/heritage.mp4",
    description: "即将上线：我们将以沉浸式影像，呈现侗寨、桥梁与少数民族文化的守护故事。",
  },
  {
    title: "振兴之路",
    subtitle: "见证产业与乡村的协同升级",
    file: "/videos/revitalization.mp4",
    description: "即将上线：聚焦村超、产业链与数字治理的协同，展现乡村振兴的具体实践。",
  },
  {
    title: "青春之路",
    subtitle: "记录青年返乡共创的脚步",
    file: "/videos/youth.mp4",
    description: "即将上线：跟随青年团队的脚步，讲述跨学科共创的真实瞬间与成长。",
  },
];

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const Section = ({ id, title, subtitle, children }: SectionProps) => (
  <section id={id} className="relative py-20 md:py-28">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-white/5"/>
    <div className="mx-auto max-w-6xl px-4">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-semibold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 text-sm md:text-base text-muted-foreground max-w-3xl"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

type PillProps = {
  children: ReactNode;
  className?: string;
};

const Pill = ({ children, className }: PillProps) => (
  <span
    className={cn(
      "rounded-full border bg-background/70 backdrop-blur px-3 py-1 text-xs text-muted-foreground",
      className,
    )}
  >
    {children}
  </span>
);

export default function PracticeSite() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const overlayOpacity = useTransform(scrollYProgress, [0.02, 0.26], [0, 1]);
  const heroContentOpacity = useTransform(scrollYProgress, [0.05, 0.22], [0, 1]);
  const heroContentTranslate = useTransform(scrollYProgress, [0.05, 0.28], [310, 250]);
  const heroSecondaryOpacity = useTransform(scrollYProgress, [0.05, 0.22], [0, 0.22]);
  const heroSecondaryBorderOpacity = useTransform(scrollYProgress, [0.05, 0.22], [0, 0.35]);
  const heroSecondaryBlur = useTransform(scrollYProgress, [0.05, 0.22], [0, 10]);
  const heroSecondaryBg = useMotionTemplate`rgba(255,255,255,${heroSecondaryOpacity})`;
  const heroSecondaryBorder = useMotionTemplate`rgba(255,255,255,${heroSecondaryBorderOpacity})`;
  const heroSecondaryBackdrop = useMotionTemplate`blur(${heroSecondaryBlur}px)`;

  return (
    <div className="min-h-screen bg-[radial-gradient(80%_80%_at_10%_10%,rgba(99,102,241,0.12),transparent),radial-gradient(60%_60%_at_90%_10%,rgba(16,185,129,0.10),transparent)] dark:bg-[radial-gradient(80%_80%_at_10%_10%,rgba(99,102,241,0.18),transparent),radial-gradient(60%_60%_at_90%_10%,rgba(16,185,129,0.16),transparent)] text-foreground">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b backdrop-blur bg-background/70">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-2">
            <img src={logo} alt="黔路兴农 · 青智赋能 logo" className="h-10 w-10 rounded-full border border-indigo-200 bg-white object-cover shadow-sm" />
            <span className="font-semibold tracking-tight">黔路兴农 · 青智赋能</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">愿景</a>
            <a href="#route" className="hover:text-foreground">路线</a>
            <a href="#projects" className="hover:text-foreground">项目</a>
            <a href="#videos" className="hover:text-foreground">记录视频</a>
            <a href="#impact" className="hover:text-foreground">影响</a>
            <a href="#team" className="hover:text-foreground">团队</a>
            <a href="#contact" className="hover:text-foreground">联系</a>
          </nav>
          <div className="hidden md:block">
            <Button className="gap-1">下载简介 <ArrowRight className="w-4 h-4"/></Button>
          </div>
        </div>
      </header>

      {/* 首屏 Hero */}
      <section
        id="home"
        ref={heroRef}
        className="relative isolate min-h-[140vh] overflow-hidden md:min-h-[150vh]"
      >
        <div className="absolute inset-0">
          <img
            src={heroPlaceholder}
            alt="贵州山地与桥梁调研的占位图"
            className="h-full w-full object-cover"
          />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/55 via-slate-950/35 to-slate-950/60" />
            <div className="absolute inset-0 bg-white/12 mix-blend-soft-light" />
          </motion.div>
        </div>
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950 via-slate-950/60 to-transparent md:h-32"
        />
        <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-6xl items-end px-4 pb-16 pt-14 md:pb-24 md:pt-20">
          <motion.div
            style={{ opacity: heroContentOpacity, y: heroContentTranslate }}
            className="grid w-full gap-12 lg:grid-cols-[1.15fr,0.85fr]"
          >
            <div className="max-w-2xl text-slate-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-slate-100/90">
                <Sparkles className="h-3.5 w-3.5 text-emerald-200" />
                走进西南腹地 · 连接乡土与科技 · 共建可持续未来
              </div>
              <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl md:leading-[1.15]">
                黔路兴农，青智赋能
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
                我们是一支来自高校的跨学科社会实践团，沿“福泉—榕江—新店—贵安—贵阳”展开调研，
                以数据与影像记录在地故事，以工程化思维共创产业与人才的可持续方案。
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg" className="gap-2 bg-white/95 text-slate-900 hover:bg-white">
                  申请共创 <HeartHandshake className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-white/50 bg-white/10 text-white hover:bg-white/20" asChild>
                  <a href="#projects">查看项目 <ArrowRight className="h-4 w-4" /></a>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Pill className="border-white/30 bg-white/10 text-white/90">
                  <Calendar className="mr-1 inline h-3.5 w-3.5" /> 2025 暑期
                </Pill>
                <Pill className="border-white/30 bg-white/10 text-white/90">
                  <MapPin className="mr-1 inline h-3.5 w-3.5" /> 黔南·黔东南·贵安·贵阳
                </Pill>
              </div>
            </div>
            <motion.div
              className="relative flex items-center justify-center rounded-3xl border border-white/25 px-6 py-6 shadow-[0_20px_52px_rgba(15,23,42,0.2)] sm:px-8 sm:py-8"
              style={{
                backgroundColor: heroSecondaryBg,
                borderColor: heroSecondaryBorder,
                backdropFilter: heroSecondaryBackdrop,
              }}
            >
              <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
                {[{
                  icon: <Mountain className="h-5 w-5" />,
                  title: "大山里的人与桥",
                  desc: "鸭池河特大桥与乡村公路网的改变",
                }, {
                  icon: <Users className="h-5 w-5" />,
                  title: "人民的‘村超’",
                  desc: "体育把人团结在一起",
                }, {
                  icon: <Leaf className="h-5 w-5" />,
                  title: "产业向上",
                  desc: "果园品牌与冷链的故事",
                }, {
                  icon: <Building2 className="h-5 w-5" />,
                  title: "数字中国",
                  desc: "数据中心、地铁与城市治理",
                }].map((item) => (
                  <div
                    key={item.title}
                    className="flex min-h-[140px] flex-col justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-5 text-sm text-slate-900 shadow-[0_8px_24px_rgba(15,23,42,0.1)] backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      {item.icon}
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-700">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-[10px] uppercase tracking-[0.4em] text-white/70">
          <span>Scroll</span>
          <span className="mt-3 h-10 w-px animate-pulse bg-white/60" />
        </div>
      </section>

      {/* 愿景 */}
      <Section id="about" title="我们的愿景" subtitle="以青年力量连接乡土与科技，让每一次社会实践都成为可持续的长期陪伴。">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            icon: <HeartHandshake className="w-5 h-5"/>,
            title: "长期主义",
            desc: "从短期活动走向年度陪伴，以‘项目化+机制化’沉淀可复用的方法论。",
          },{
            icon: <Leaf className="w-5 h-5"/>,
            title: "在地价值",
            desc: "尊重地方知识与文化表达，建立共创与互信，反对‘到此一游’式实践。",
          },{
            icon: <Sparkles className="w-5 h-5"/>,
            title: "科技向善",
            desc: "用数据、影像与工程化工具，帮助小而美的在地需求被看见与解决。",
          }].map((it, i) => (
            <Card key={i} className="border bg-background/60 backdrop-blur">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="rounded-xl border p-2">{it.icon}</div>
                <CardTitle className="text-base">{it.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">{it.desc}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* 路线 */}
      <Section id="route" title="实践路线" subtitle="沿着桥与河、村与城，我们记录‘被改变的距离’与‘延伸的机会’。">
        <div className="grid md:grid-cols-5 gap-4">
          {stops.map((s, i) => (
            <motion.div
              key={s.city}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border bg-background/60 backdrop-blur p-4"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                {s.icon}
                <span>{s.subtitle}</span>
              </div>
              <div className="mt-2 text-lg font-semibold">{s.city}</div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.detail}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 项目 */}
      <Section id="projects" title="重点项目" subtitle="把‘看见’变成‘行动’，以小切口、可复制的方案持续迭代。">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Card key={i} className="group border bg-background/60 backdrop-blur overflow-hidden">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="rounded-xl border p-2 bg-background">{p.icon}</div>
                <CardTitle className="text-base">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full border px-2 py-1 bg-background/70">{t}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="gap-1">了解详情 <ArrowRight className="w-4 h-4"/></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* 记录视频 */}
      <Section id="videos" title="记录视频" subtitle="以影像为证，我们持续记录人与乡土、科技与产业之间的真实连接。">
        <div className="grid gap-6 md:grid-cols-3">
          {videoCollections.map((video) => (
            <Card key={video.title} className="border bg-background/60 backdrop-blur overflow-hidden">
              <CardHeader className="gap-2 space-y-2">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:text-emerald-400">
                    <Film className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-foreground">{video.title}</div>
                    <div className="text-xs text-muted-foreground">{video.subtitle}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="aspect-video w-full overflow-hidden rounded-xl border bg-muted/40">
                  <video
                    controls
                    preload="metadata"
                    className="h-full w-full bg-black/80 object-cover"
                    src={video.file}
                  >
                    您的浏览器暂不支持 video 标签。
                  </video>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{video.description}</p>
                <p className="text-[11px] text-muted-foreground">如无法播放，请替换 public/videos 目录中的占位视频文件。</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* 影响 */}
      <Section id="impact" title="阶段性影响" subtitle="数据背后，是一次次真实的连接与改变。">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border bg-background/60 backdrop-blur p-5">
              <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-xs text-muted-foreground">
          * 注：以上数据为阶段性统计，最终以实践结项报告为准。
        </div>
      </Section>

      {/* 团队 */}
      <Section id="team" title="核心团队" subtitle="跨学科的年轻人，用专业主义与同理心走入现实场景。">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "总负责人", role: "统筹 · 外联", bio: "负责整体统筹、对外合作与资源链接。", avatar: "Z" },
            { name: "影像导演", role: "纪录片 · 叙事", bio: "负责影像采集、叙事设计与后期。", avatar: "V" },
            { name: "产品与数据", role: "方法论 · 工具", bio: "负责问卷与画像、品牌与电商工具包。", avatar: "X" },
          ].map((m, i) => (
            <Card key={i} className="border bg-background/60 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-emerald-500 text-white flex items-center justify-center font-semibold">
                    {m.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{m.name}</div>
                    <div className="text-xs text-muted-foreground">{m.role}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* 合作伙伴 */}
      <Section id="partners" title="合作与支持" subtitle="欢迎与高校、政府、机构、企业及乡村组织共建。">
        <div className="flex flex-wrap items-center gap-3">
          {partners.map((p) => (
            <span key={p} className="text-xs rounded-full border bg-background/60 backdrop-blur px-3 py-1">{p}</span>
          ))}
        </div>
      </Section>

      {/* 联系 */}
      <Section id="contact" title="联系与共创" subtitle="如果你愿意一起把‘一次’做成‘长期’，给我们写封信。">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border bg-background/60 backdrop-blur">
            <CardContent className="p-6">
              <form className="grid gap-4">
                <div className="grid gap-1">
                  <label className="text-xs">你的称呼</label>
                  <input className="h-10 rounded-lg border bg-background px-3 text-sm" placeholder="张同学 / 李老师 / 王经理" />
                </div>
                <div className="grid gap-1">
                  <label className="text-xs">邮箱</label>
                  <input className="h-10 rounded-lg border bg-background px-3 text-sm" placeholder="you@example.com" />
                </div>
                <div className="grid gap-1">
                  <label className="text-xs">想要合作的方向</label>
                  <textarea className="min-h-[120px] rounded-lg border bg-background px-3 py-2 text-sm" placeholder="例如：纪录片共创 / 品牌共建 / 电商培训 / 青年返乡计划…"/>
                </div>
                <Button className="gap-2">发送意向 <Mail className="w-4 h-4"/></Button>
                <p className="text-[11px] text-muted-foreground">表单为演示用途，请按需接入后端或第三方表单服务。</p>
              </form>
            </CardContent>
          </Card>
          <div className="rounded-2xl border bg-background/60 backdrop-blur p-6">
            <div className="text-sm font-medium">联络邮箱</div>
            <a className="text-sm text-indigo-600 dark:text-emerald-400" href="mailto:join@qing-intelligence.org">join@qing-intelligence.org</a>
            <div className="mt-4 text-sm font-medium">资料包</div>
            <p className="text-sm text-muted-foreground">可提供：实践方案书、海报与Logo、纪录片分镜、合作条款样例。</p>
            <div className="mt-4">
              <Button variant="outline" className="gap-1">获取资料包 <ArrowRight className="w-4 h-4"/></Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 页脚 */}
      <footer className="border-t py-10 text-xs text-muted-foreground">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} 黔路兴农 · 青智赋能 社会实践团</div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5"/> 贵州 · 北京</span>
            <span className="inline-flex items-center gap-1"><Sparkles className="w-3.5 h-3.5"/> 制作：北京交通大学“黔路兴农，青智赋能”实践团</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
