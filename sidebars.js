/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: "doc",
      label: "Docs home",
      id: "home/index",
    },
    {
      type: "category",
      label: "Introduction",
      link: { type: "doc", id: "core/introduction/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Introduction to Events and Streaming",
          id: "core/introduction/intro-to-events",
        },
        {
          type: "doc",
          label: "Designed for Performance",
          id: "core/introduction/autotune",
        },
        "core/introduction/licenses",
        {
          type: "doc",
          label: "Technical Preview",
          id: "core/introduction/tech-preview",
        },
      ],
    },
    {
      type: "category",
      label: "Install and Upgrade",
      link: { type: "doc", id: "core/install-upgrade/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Installing Preview Versions",
          id: "core/install-upgrade/install-preview",
        },
        {
          type: "doc",
          label: "Version Upgrade",
          id: "core/install-upgrade/version-upgrade",
        },
        {
          type: "doc",
          label: "Rolling Upgrades",
          id: "core/install-upgrade/rolling-upgrade",
        },
      ],
    },
    {
      type: "category",
      label: "60-Second Guides",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "core/quickstart/index" },
      items: [
        {
          type: "doc",
          label: "Docker",
          id: "core/quickstart/quick-start-docker",
        },
        {
          type: "doc",
          label: "Linux",
          id: "core/quickstart/quick-start-linux",
        },
        {
          type: "doc",
          label: "macOS",
          id: "core/quickstart/quick-start-macos",
        },
        {
          type: "doc",
          label: "Windows",
          id: "core/quickstart/quick-start-windows",
        },
        {
          type: "doc",
          label: "Kubernetes",
          id: "core/quickstart/kubernetes-qs-dev",
        },
      ],
    },
    {
      type: "category",
      label: "Deployment",
      collapsible: true,
      link: { type: "doc", id: "core/deployment/index" },
      collapsed: true,
      items: [
        "core/deployment/production-deployment-automation",
        {
          type: "category",
          label: "Performance and storage tuning",
          items: ["core/deployment/disk-utilization", "core/deployment/io-optimization"],
        },
        {
          type: "doc",
          label: "Deploying for Production",
          id: "core/deployment/production-deployment",
        },
        {
          type: "doc",
          label: "Writing Custom Deployment",
          id: "core/deployment/custom-deployment",
        },
      ],
    },
    {
      type: "category",
      label: "Cluster Administration",
      link: { type: "doc", id: "core/cluster-administration/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Configuration",
          link: {
            type: "doc",
            id: "core/cluster-administration/configuration",
          },
          items: [
            {
              type: "doc",
              label: "Configuring Cluster Properties",
              id: "core/cluster-administration/cluster-property-configuration",
            },
            {
              type: "doc",
              label: "Configuring Node Properties",
              id: "core/cluster-administration/node-property-configuration",
            },
            "core/cluster-administration/listener-configuration",
          ],
        },
        {
          type: "category",
          label: "Cluster balancing",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "core/cluster-administration/cluster-balancing",
          },
          items: [
            {
              type: "doc",
              label: "Configuring Continuous Data Balancing",
              id: "core/cluster-administration/continuous-data-balancing",
            },
          ],
        },
        {
          type: "doc",
          label: "Node Maintenance Mode",
          id: "core/cluster-administration/node-management",
        },
        "core/cluster-administration/monitoring",
      ],
    },
    {
      type: "category",
      label: "Data Management",
      link: { type: "doc", id: "core/data-management/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "core/data-management/tiered-storage",
        "core/data-management/data-archiving",
        "core/data-management/remote-read-replicas",
        "core/data-management/data-transform",
        "core/data-management/data-migration",
        "core/data-management/rack-awareness",
      ],
    },
    {
      type: "category",
      label: "Development",
      link: { type: "doc", id: "core/development/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Kafka clients",
          id: "core/development/kafka-clients",
        },
        "core/development/guide-nodejs",
        "core/development/consumer-offsets",
        "core/development/idempotent-producers",
        "core/development/http-proxy",
      ],
    },
    {
      type: "category",
      label: "Security",
      link: { type: "doc", id: "core/security/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "core/security/encryption",
        "core/security/authentication",
        "core/security/authorization",
        "core/security/iam-roles",
      ],
    },
    {
      type: "category",
      label: "Redpanda Console",
      link: { type: "doc", id: "core/console/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "core/console/installation",
        {
          type: "category",
          label: "Features",
          items: [
            "core/console/features/kafka-connect",
            "core/console/features/record-deserialization",
            "core/console/features/schema-registry",
            "core/console/features/protobuf",
            "core/console/features/topic-documentation",
            "core/console/features/programmable-push-filters",
            "core/console/features/http-path-rewrites",
          ],
        },
        {
          type: "category",
          label: "Single Sign On",
          items: [
            {
              type: "doc",
              label: "Authentication",
              id: "core/console/single-sign-on/authentication",
            },
            {
              type: "doc",
              label: "Authorization",
              id: "core/console/single-sign-on/authorization",
            },
            {
              type: "doc",
              label: "GitHub",
              id: "core/console/single-sign-on/identity-providers/github",
            },
            {
              type: "doc",
              label: "Google",
              id: "core/console/single-sign-on/identity-providers/google",
            },
            {
              type: "doc",
              label: "Okta",
              id: "core/console/single-sign-on/identity-providers/okta",
            },
            {
              type: "doc",
              label: "Generic OIDC",
              id: "core/console/single-sign-on/identity-providers/generic-oidc",
            },
          ],
        },
        {
          type: "category",
          label: "Reference",
          items: [
            {
              type: "doc",
              label: "Redpanda Console Configuration",
              id: "core/console/reference/config",
            },
            {
              type: "doc",
              label: "Redpanda Console Role-Binding Configuration",
              id: "core/console/reference/role-bindings",
            },
            {
              type: "doc",
              label: "Docker Compose Configuration",
              id: "core/console/reference/docker-compose",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Reference",
      link: { type: "doc", id: "core/reference/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "core/reference/cluster-properties",
        "core/reference/tunable-properties",
        "core/reference/node-properties",
        "core/reference/node-configuration-sample",
        {
          type: "category",
          label: "rpk Commands",
          link: { type: "doc", id: "core/reference/rpk/index" },
          items: [
            "core/reference/rpk/rpk-commands",
            {
              type: "category",
              label: "rpk acl",
              link: { type: "doc", id: "core/reference/rpk/rpk-acl/rpk-acl" },
              items: [
                "core/reference/rpk/rpk-acl/rpk-acl",
                "core/reference/rpk/rpk-acl/rpk-acl-create",
                "core/reference/rpk/rpk-acl/rpk-acl-delete",
                {
                  type: "category",
                  label: "rpk acl user",
                  link: {
                    type: "doc",
                    id: "core/reference/rpk/rpk-acl/rpk-acl-user",
                  },
                  items: [
                    "core/reference/rpk/rpk-acl/rpk-acl-user",
                    "core/reference/rpk/rpk-acl/rpk-acl-user-create",
                    "core/reference/rpk/rpk-acl/rpk-acl-user-delete",
                    "core/reference/rpk/rpk-acl/rpk-acl-user-list",
                  ],
                }, //acl user
              ],
            }, //acl
            {
              type: "category",
              label: "rpk cluster",
              link: {
                type: "doc",
                id: "core/reference/rpk/rpk-cluster/rpk-cluster",
              },
              items: [
                {
                  type: "category",
                  label: "rpk cluster config",
                  link: {
                    type: "doc",
                    id: "core/reference/rpk/rpk-cluster/rpk-cluster-config",
                  },
                  items: [
                    "core/reference/rpk/rpk-cluster/rpk-cluster-config",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-config-edit",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-config-export",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-config-force-reset",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-config-get",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-config-import",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-config-lint",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-config-set",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-config-status",
                  ],
                },
                "core/reference/rpk/rpk-cluster/rpk-cluster-health",
                {
                  type: "category",
                  label: "rpk cluster license",
                  link: {
                    type: "doc",
                    id: "core/reference/rpk/rpk-cluster/rpk-cluster-license",
                  },
                  items: [
                    "core/reference/rpk/rpk-cluster/rpk-cluster-license",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-license-info",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-license-set",
                  ],
                },
                {
                  type: "category",
                  label: "rpk cluster logdirs",
                  link: {
                    type: "doc",
                    id: "core/reference/rpk/rpk-cluster/rpk-cluster-logdirs",
                  },
                  items: [
                    "core/reference/rpk/rpk-cluster/rpk-cluster-logdirs",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-logdirs-describe",
                  ],
                },
                {
                  type: "category",
                  label: "rpk cluster maintenance",
                  link: {
                    type: "doc",
                    id: "core/reference/rpk/rpk-cluster/rpk-cluster-maintenance",
                  },
                  items: [
                    "core/reference/rpk/rpk-cluster/rpk-cluster-maintenance",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-maintenance-disable",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-maintenance-enable",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-maintenance-status",
                  ],
                },
                "core/reference/rpk/rpk-cluster/rpk-cluster-metadata",
                {
                  type: "category",
                  label: "rpk cluster partitions",
                  link: {
                    type: "doc",
                    id: "core/reference/rpk/rpk-cluster/rpk-cluster-partitions",
                  },
                  items: [
                    "core/reference/rpk/rpk-cluster/rpk-cluster-partitions",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-partitions-balancer-status",
                    "core/reference/rpk/rpk-cluster/rpk-cluster-partitions-movement-cancel",
                  ],
                },
              ],
            }, //acl cluster
            {
              type: "category",
              label: "rpk container",
              link: {
                type: "doc",
                id: "core/reference/rpk/rpk-container/rpk-container",
              },
              items: [
                "core/reference/rpk/rpk-container/rpk-container",
                "core/reference/rpk/rpk-container/rpk-container-purge",
                "core/reference/rpk/rpk-container/rpk-container-start",
                "core/reference/rpk/rpk-container/rpk-container-stop",
              ],
            },
            {
              type: "category",
              label: "rpk debug",
              link: {
                type: "doc",
                id: "core/reference/rpk/rpk-debug/rpk-debug",
              },
              items: [
                "core/reference/rpk/rpk-debug/rpk-debug",
                "core/reference/rpk/rpk-debug/rpk-debug-bundle",
              ],
            },
            {
              type: "category",
              label: "rpk generate",
              link: {
                type: "doc",
                id: "core/reference/rpk/rpk-generate/rpk-generate",
              },
              items: [
                "core/reference/rpk/rpk-generate/rpk-generate",
                "core/reference/rpk/rpk-generate/rpk-generate-grafana-dashboard",
                "core/reference/rpk/rpk-generate/rpk-generate-prometheus-config",
                "core/reference/rpk/rpk-generate/rpk-generate-shell-completion",
              ],
            },
            {
              type: "category",
              label: "rpk group",
              link: {
                type: "doc",
                id: "core/reference/rpk/rpk-group/rpk-group",
              },
              items: [
                "core/reference/rpk/rpk-group/rpk-group",
                "core/reference/rpk/rpk-group/rpk-group-delete",
                "core/reference/rpk/rpk-group/rpk-group-describe",
                "core/reference/rpk/rpk-group/rpk-group-list",
                "core/reference/rpk/rpk-group/rpk-group-seek",
              ],
            },
            "core/reference/rpk/rpk-help",
            "core/reference/rpk/rpk-iotune",
            {
              type: "category",
              label: "rpk plugin",
              link: {
                type: "doc",
                id: "core/reference/rpk/rpk-plugin/rpk-plugin",
              },
              items: [
                "core/reference/rpk/rpk-plugin/rpk-plugin",
                "core/reference/rpk/rpk-plugin/rpk-plugin-list",
                "core/reference/rpk/rpk-plugin/rpk-plugin-uninstall",
                "core/reference/rpk/rpk-plugin/rpk-plugin-install",
              ],
            },
            {
              type: "category",
              label: "rpk redpanda",
              link: {
                type: "doc",
                id: "core/reference/rpk/rpk-redpanda/rpk-redpanda",
              },
              items: [
                "core/reference/rpk/rpk-redpanda/rpk-redpanda",
                {
                  type: "category",
                  label: "rpk redpanda admin",
                  link: {
                    type: "doc",
                    id: "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin",
                  },
                  items: [
                    "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin",
                    {
                      type: "category",
                      label: "rpk redpanda admin brokers",
                      link: {
                        type: "doc",
                        id: "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers",
                      },
                      items: [
                        "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers",
                        "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-decommission",
                        "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-list",
                        "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-recommission",
                      ],
                    },
                    {
                      type: "category",
                      label: "rpk redpanda admin config",
                      link: {
                        type: "doc",
                        id: "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin-config",
                      },
                      items: [
                        "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin-config",
                        "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-log-level-set",
                        "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-log-level",
                        "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-print",
                      ],
                    },
                    {
                      type: "category",
                      label: "rpk redpanda admin partitions",
                      link: {
                        type: "doc",
                        id: "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions",
                      },
                      items: [
                        "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions",
                        "core/reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions-list",
                      ],
                    },
                  ],
                }, //rpk redpanda admin
                "core/reference/rpk/rpk-redpanda/rpk-redpanda-check",
                {
                  type: "category",
                  label: "rpk redpanda config",
                  link: {
                    type: "doc",
                    id: "core/reference/rpk/rpk-redpanda/rpk-redpanda-config",
                  },
                  items: [
                    "core/reference/rpk/rpk-redpanda/rpk-redpanda-config",
                    "core/reference/rpk/rpk-redpanda/rpk-redpanda-config-bootstrap",
                    "core/reference/rpk/rpk-redpanda/rpk-redpanda-config-init",
                    "core/reference/rpk/rpk-redpanda/rpk-redpanda-config-set",
                  ],
                },
                "core/reference/rpk/rpk-redpanda/rpk-redpanda-mode",
                "core/reference/rpk/rpk-redpanda/rpk-redpanda-start",
                "core/reference/rpk/rpk-redpanda/rpk-redpanda-stop",
                {
                  type: "category",
                  label: "rpk redpanda tune",
                  link: {
                    type: "doc",
                    id: "core/reference/rpk/rpk-redpanda/rpk-redpanda-tune",
                  },
                  items: [
                    "core/reference/rpk/rpk-redpanda/rpk-redpanda-tune",
                    "core/reference/rpk/rpk-redpanda/rpk-redpanda-tune-help",
                    "core/reference/rpk/rpk-redpanda/rpk-redpanda-tune-list",
                  ],
                },
              ],
            }, //rpk redpanda
            {
              type: "category",
              label: "rpk topic",
              link: {
                type: "doc",
                id: "core/reference/rpk/rpk-topic/rpk-topic",
              },
              items: [
                "core/reference/rpk/rpk-topic/rpk-topic",
                "core/reference/rpk/rpk-topic/rpk-topic-add-partitions",
                "core/reference/rpk/rpk-topic/rpk-topic-alter-config",
                "core/reference/rpk/rpk-topic/rpk-topic-consume",
                "core/reference/rpk/rpk-topic/rpk-topic-create",
                "core/reference/rpk/rpk-topic/rpk-topic-delete",
                "core/reference/rpk/rpk-topic/rpk-topic-describe",
                "core/reference/rpk/rpk-topic/rpk-topic-list",
                "core/reference/rpk/rpk-topic/rpk-topic-produce",
              ],
            },
            "core/reference/rpk/rpk-version",
            {
              type: "category",
              label: "rpk wasm",
              link: { type: "doc", id: "core/reference/rpk/rpk-wasm/rpk-wasm" },
              items: [
                "core/reference/rpk/rpk-wasm/rpk-wasm",
                "core/reference/rpk/rpk-wasm/rpk-wasm-deploy",
                "core/reference/rpk/rpk-wasm/rpk-wasm-generate",
                "core/reference/rpk/rpk-wasm/rpk-wasm-remove",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Redpanda Operator",
          link: { type: "doc", id: "core/reference/redpanda-operator/index" },
          items: [
            {
              type: "category",
              label: "Install",
              items: [
                "core/reference/redpanda-operator/kubernetes-qs-local-access",
                "core/reference/redpanda-operator/kubernetes-qs-minikube",
                "core/reference/redpanda-operator/kubernetes-qs-cloud",
              ],
            },
            {
              type: "category",
              label: "Deploy",
              items: [
                "core/reference/redpanda-operator/kubernetes-connectivity",
                "core/reference/redpanda-operator/kubernetes-external-connect",
                "core/reference/redpanda-operator/kubernetes-additional-config",
                "core/reference/redpanda-operator/arbitrary-configuration",
              ],
            },
            {
              type: "category",
              label: "Security",
              items: [
                "core/reference/redpanda-operator/security-kubernetes",
                "core/reference/redpanda-operator/tls-kubernetes",
                "core/reference/redpanda-operator/kubernetes-sasl",
                "core/reference/redpanda-operator/kubernetes-mtls",
              ],
            },

            {
              type: "link",
              label: "Operator Custom Resource Definition (CRD)",
              href: "https://doc.crds.dev/github.com/vectorizedio/redpanda",
            },
          ],
        },
        "core/reference/internal-metrics",
        {
          type: "link",
          label: "Release notes",
          href: "https://github.com/redpanda-data/redpanda/releases",
        },
      ],
    },
    {
      type: "doc",
      id: "core/support",
    },
  ],
  cloudSidebar:
  [
    {
      type: 'doc',
      label: 'Docs home',
      id: 'home/index',
    },
    {
      type: 'doc',
      label: 'Cloud Intro',
      id: 'cloud/index',
    },
    {
      type: 'category',
      label: 'Kubernetes',
      items: [
        'cloud/kubernetes/development',
        'cloud/kubernetes/production',       
      ],
    },
  ],
  homeSidebar : 
  [
    {
    type: 'doc',
    label: 'Docs home',
    id: 'home/index',
  },
    {
      type: 'doc',
      label: 'Core',
      id: 'core/introduction/index',
    },
    {
      type: 'doc',
      label: 'Cloud',
      id: 'cloud/index',
    },
  ]
};
