import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Users, Leaf, GraduationCap, Camera, Share2, Mail, Calendar,
  Sparkles, ArrowRight, Landmark, HeartHandshake, BookOpenText, Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
};

const Pill = ({ children }: PillProps) => (
  <span className="rounded-full border bg-background/70 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
    {children}
  </span>
);

export default function PracticeSite() {
  return (
    <div className="min-h-screen bg-[radial-gradient(80%_80%_at_10%_10%,rgba(99,102,241,0.12),transparent),radial-gradient(60%_60%_at_90%_10%,rgba(16,185,129,0.10),transparent)] dark:bg-[radial-gradient(80%_80%_at_10%_10%,rgba(99,102,241,0.18),transparent),radial-gradient(60%_60%_at_90%_10%,rgba(16,185,129,0.16),transparent)] text-foreground">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b backdrop-blur bg-background/70">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 text-white shadow-md">黔</span>
            <span className="font-semibold tracking-tight">黔路兴农 · 青智赋能</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">愿景</a>
            <a href="#route" className="hover:text-foreground">路线</a>
            <a href="#projects" className="hover:text-foreground">项目</a>
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
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 backdrop-blur px-3 py-1 text-xs">
                <Sparkles className="w-4 h-4"/>
                走进西南腹地 · 连接乡土与科技 · 共建可持续未来
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15]">
                黔路兴农，青智赋能
              </h1>
              <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl">
                我们是一支来自高校的跨学科社会实践团，沿“福泉—榕江—新店—贵安—贵阳”展开调研，
                以数据与影像记录在地故事，以工程化思维共创产业与人才的可持续方案。
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button size="lg" className="gap-2">
                  申请共创 <HeartHandshake className="w-4 h-4"/>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="#projects">查看项目 <ArrowRight className="w-4 h-4"/></a>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Pill><Calendar className="w-3.5 h-3.5 mr-1 inline"/> 2025 暑期</Pill>
                <Pill><MapPin className="w-3.5 h-3.5 mr-1 inline"/> 黔南·黔东南·贵安·贵阳</Pill>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/3] w-full rounded-3xl border bg-gradient-to-br from-indigo-500/15 to-emerald-500/15 p-4 md:p-6">
                <div className="grid h-full w-full grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-background/70 border backdrop-blur p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-2 text-sm"><Mountain className="w-4 h-4"/> 大山里的人与桥</div>
                    <div className="text-xs text-muted-foreground">鸭池河特大桥与乡村公路网的改变</div>
                  </div>
                  <div className="rounded-2xl bg-background/70 border backdrop-blur p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-2 text-sm"><Users className="w-4 h-4"/> 人民的‘村超’</div>
                    <div className="text-xs text-muted-foreground">体育把人团结在一起</div>
                  </div>
                  <div className="rounded-2xl bg-background/70 border backdrop-blur p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-2 text-sm"><Leaf className="w-4 h-4"/> 产业向上</div>
                    <div className="text-xs text-muted-foreground">果园品牌与冷链的故事</div>
                  </div>
                  <div className="rounded-2xl bg-background/70 border backdrop-blur p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-2 text-sm"><Building2 className="w-4 h-4"/> 数字中国</div>
                    <div className="text-xs text-muted-foreground">数据中心、地铁与城市治理</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
            <span className="inline-flex items-center gap-1"><Sparkles className="w-3.5 h-3.5"/> 制作：青年共创实验室</span>
          </div>
        </div>
      </footer>
    </div>
  );
}